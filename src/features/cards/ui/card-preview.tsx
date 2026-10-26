import { useFormContext } from "react-hook-form";
import { CardView, type CardFormValues } from "../../../entities";
import { CARD_STEP_PARAM } from "../model/step";
import { useSearchParams } from "react-router-dom";
import { Button, ButtonVariations, Title, TitleVariations } from "../../../shared";
import { Preview, PreviewActions } from "./styles";




export const CardPreview = () => {
    const [, setSearchParams] = useSearchParams();
    const { getValues } = useFormContext<CardFormValues>();
    const values = getValues();

    const handleBack = () => {
        window.history.back();
    };

    const handleConfirm = () => {
        setSearchParams({ [CARD_STEP_PARAM]: 'confirm' });
    };

    return (
        <Preview>
            <Title variant={TitleVariations.PAGE}>Card Preview</Title>
            <CardView values={values} />

            <PreviewActions>
                <Button variant={ButtonVariations.OUTLINE_BUTTON} onClick={handleBack}>← Back to Form</Button>
                <Button variant={ButtonVariations.ACTION_BUTTON} onClick={handleConfirm}>Edit Card</Button>
            </PreviewActions>
        </Preview>
    );
};
