import { InputVariations } from "./input-variations";
import { DefaultInput, ErrorText, Field, Icon } from "./styles";


type Props = {
    variant: InputVariations;
    icon?: React.ReactNode;
    error?: string;
    ref?: React.Ref<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const variations = {
    [InputVariations.DEFAULT]: DefaultInput
};

export const Input = ({ variant, icon, error, ...attributes }: Props) => {
    const StyledInput = variations[variant];

    return (
        <Field>
            <StyledInput $error={Boolean(error)}>
                {icon && <Icon aria-hidden>{icon}</Icon>}
                <input aria-invalid={Boolean(error)} {...attributes} />
            </StyledInput>
            {error && <ErrorText>{error}</ErrorText>}
        </Field>
    );
};
