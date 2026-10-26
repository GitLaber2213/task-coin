import { FormFieldVariations } from "./form-field-variations";
import { DefaultField, ErrorText, Label } from "./styles";


type Props = {
    variant: FormFieldVariations;
    label?: string;
    error?: string;
    htmlFor?: string;
    children: React.ReactNode;
};

const variations = {
    [FormFieldVariations.DEFAULT]: DefaultField
};

export const FormField = ({ variant, label, error, htmlFor, children }: Props) => {
    const StyledField = variations[variant];

    return (
        <StyledField>
            {label && <Label htmlFor={htmlFor} $error={Boolean(error)}>{label}</Label>}
            {children}
            {error && <ErrorText>{error}</ErrorText>}
        </StyledField>
    );
};
