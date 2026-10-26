import { useId } from "react";
import { FormField } from "../form-field";
import { FormFieldVariations } from "../form-field/form-field-variations";
import { InputVariations } from "./input-variations";
import { DefaultInput, FormInput, Icon } from "./styles";


type Props = {
    variant: InputVariations;
    icon?: React.ReactNode;
    label?: string;
    error?: string;
    ref?: React.Ref<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const variations = {
    [InputVariations.DEFAULT]: DefaultInput,
    [InputVariations.FORM]: FormInput
};

export const Input = ({ variant, icon, label, error, id, ...attributes }: Props) => {
    const StyledInput = variations[variant];
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
        <FormField variant={FormFieldVariations.DEFAULT} label={label} error={error} htmlFor={inputId}>
            <StyledInput $error={Boolean(error)}>
                {icon && <Icon aria-hidden>{icon}</Icon>}
                <input id={inputId} aria-invalid={Boolean(error)} {...attributes} />
            </StyledInput>
        </FormField>
    );
};
