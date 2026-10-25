import { useFormContext } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { CardForm, type CardFormValues } from "../../../entities";
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
        payload.append('deadline', values.deadline.toISOString());
        values.tags.forEach((tag) => payload.append('tags', tag));
        values.images.forEach(({ file }) => {
            if (file) payload.append('images', file);
        });

        // FormData doesn't serialize to JSON, so show files by their metadata
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
            title="Card Confirm"
            onSubmit={onSubmit}
            actions={
                <>
                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type="submit">Save Card</button>
                </>
            }
        />
    );
};
