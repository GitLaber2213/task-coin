import { useFormContext } from "react-hook-form";
import type { CardFormValues } from "../../../entities";
import { CARD_STEP_PARAM } from "../model/step";
import { useSearchParams } from "react-router-dom";




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
        <div>
            <h1>Card Preview</h1>
            <p><strong>Title:</strong> {values.title}</p>
            <p><strong>Description:</strong> {values.description}</p>
            <p><strong>Priority:</strong> {values.priority}</p>
            <p><strong>Status:</strong> {values.status}</p>
            <p><strong>Assignee:</strong> {values.assignee}</p>
            <p><strong>Deadline:</strong> {values.deadline ? values.deadline.toLocaleDateString() : 'Not set'}</p>
            <p><strong>Tags:</strong> {values.tags.join(', ') || 'None'}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {values.images.map((image, index) => (
                    <img key={index} src={image.dataURL} alt={image.file?.name}
                        style={{ width: 96, height: 96, objectFit: 'cover', display: 'block' }}
                    />
                ))}
            </div>


            <button onClick={handleBack}>Back to Edit</button>
            <button onClick={handleConfirm}>Edit Card</button>
        </div>
    );
};