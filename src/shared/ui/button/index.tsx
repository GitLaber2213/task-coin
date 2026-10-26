import { ButtonVariations } from "./button-variations";
import { ActionButton, DefaultButton, MenuButton, MenuButtonExpanded, OutlineButton } from "./styles";


type Props = {
    variant: ButtonVariations;
    active?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const variations = {
    [ButtonVariations.DEFAULT_BUTTON]: DefaultButton,
    [ButtonVariations.ACTION_BUTTON]: ActionButton,
    [ButtonVariations.OUTLINE_BUTTON]: OutlineButton,
    [ButtonVariations.MENU_BUTTON]: MenuButton,
    [ButtonVariations.MENU_BUTTON_EXPANDED]: MenuButtonExpanded
};

export const Button = ({ variant, active = false, fullWidth, children, ...attributes }: Props) => {
    const StyledButton = variations[variant];

    return (
        <StyledButton $active={active} $fullWidth={fullWidth} {...attributes}>
            {children}
        </StyledButton>
    );
};
