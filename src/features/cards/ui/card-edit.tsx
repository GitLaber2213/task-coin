import { useFormContext } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { CardForm, type CardFormValues } from "../../../entities";
import { Button, ButtonVariations } from "../../../shared";
import { CARD_STEP_PARAM } from "../model/step";

export const CardEdit = () => {
    const { reset } = useFormContext<CardFormValues>();
    const [, setSearchParams] = useSearchParams();

    const onSubmit = () => {
        setSearchParams({ [CARD_STEP_PARAM]: 'preview' });
    };

    return (
        <CardForm
            title="Create New Card"
            onSubmit={onSubmit}
            actions={
                <>
                    <Button variant={ButtonVariations.OUTLINE_BUTTON} type="button" onClick={() => reset()}>
                        Cancel
                    </Button>
                    <Button variant={ButtonVariations.ACTION_BUTTON} type="submit">Create Card</Button>
                </>
            }
        />
    );
};
