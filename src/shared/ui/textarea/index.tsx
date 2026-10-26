import { useId } from "react";
import { FormField } from "../form-field";
import { FormFieldVariations } from "../form-field/form-field-variations";
import { TextareaVariations } from "./textarea-variations";
import { DefaultTextarea } from "./styles";


type Props = {
    variant: TextareaVariations;
    label?: string;
    error?: string;
    ref?: React.Ref<HTMLTextAreaElement>;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const variations = {
    [TextareaVariations.DEFAULT]: DefaultTextarea
};

export const Textarea = ({ variant, label, error, id, ...attributes }: Props) => {
    const StyledTextarea = variations[variant];
    const generatedId = useId();
    const textareaId = id ?? generatedId;

    return (
        <FormField variant={FormFieldVariations.DEFAULT} label={label} error={error} htmlFor={textareaId}>
            <StyledTextarea id={textareaId} $error={Boolean(error)} aria-invalid={Boolean(error)} {...attributes} />
        </FormField>
    );
};
