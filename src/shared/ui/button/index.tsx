import { ButtonVariations } from "./button-variations";
import { ActionButton, DefaultButton, MenuButton, MenuButtonExpanded, OutlineButton, Spinner, TabButton } from "./styles";


type Props = {
    variant: ButtonVariations;
    active?: boolean;
    fullWidth?: boolean;
    loading?: boolean;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const variations = {
    [ButtonVariations.DEFAULT_BUTTON]: DefaultButton,
    [ButtonVariations.ACTION_BUTTON]: ActionButton,
    [ButtonVariations.OUTLINE_BUTTON]: OutlineButton,
    [ButtonVariations.TAB_BUTTON]: TabButton,
    [ButtonVariations.MENU_BUTTON]: MenuButton,
    [ButtonVariations.MENU_BUTTON_EXPANDED]: MenuButtonExpanded
};

export const Button = ({ variant, active = false, fullWidth, loading = false, disabled, children, ...attributes }: Props) => {
    const StyledButton = variations[variant];

    return (
        <StyledButton $active={active} $fullWidth={fullWidth} disabled={disabled || loading} aria-busy={loading} {...attributes}>
            {loading ? <Spinner aria-hidden /> : children}
        </StyledButton>
    );
};
