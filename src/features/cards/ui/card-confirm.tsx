import { useFormContext } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { CardForm, type CardFormValues } from "../../../entities";
import { Button, ButtonVariations } from "../../../shared";
import { CARD_STEP_PARAM } from "../model/step";

export const CardConfirm = () => {
    const { reset } = useFormContext<CardFormValues>();
    const [, setSearchParams] = useSearchParams();

    const onSubmit = (values: CardFormValues) => {
        const payload = new FormData();
        payload.append('title', values.title);
        payload.append('description', values.description);
        payload.append('priority', values.priority);
        payload.append('status', values.status);
        payload.append('assignee', values.assignee);
        if (values.deadline) payload.append('deadline', values.deadline.toISOString());
        values.tags.forEach((tag) => payload.append('tags', tag));
        values.images.forEach(({ file }) => {
            if (file) payload.append('images', file);
        });

        const preview = Array.from(payload.entries()).map(([key, value]) =>
            value instanceof File
                ? `${key}: File(${value.name}, ${value.size} bytes, ${value.type})`
                : `${key}: ${value}`
        );

        alert(preview.join('\n'));
    };

    const handleCancel = () => {
        setSearchParams({ [CARD_STEP_PARAM]: 'edit' });
        reset();
    };

    return (
        <CardForm
            title="Create New Card"
            onSubmit={onSubmit}
            actions={
                <>
                    <Button variant={ButtonVariations.OUTLINE_BUTTON} type="button" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant={ButtonVariations.ACTION_BUTTON} type="submit">Save Card</Button>
                </>
            }
        />
    );
};
