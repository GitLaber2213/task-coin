import { useSearchParams } from "react-router-dom";
import { CardForm } from "../../../entities";
import { CARD_STEP_PARAM } from "../model/step";

export const CardEdit = () => {
    const [, setSearchParams] = useSearchParams();

    const onSubmit = () => {
        setSearchParams({ [CARD_STEP_PARAM]: 'preview' });
    };

    return (
        <CardForm
            title="Cards"
            onSubmit={onSubmit}
            actions={
                <button type="submit">Create Card</button>
            }
        />
    );
};
