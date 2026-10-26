export const ButtonVariations = {
    DEFAULT_BUTTON: 'DEFAULT_BUTTON',
    MENU_BUTTON: 'MENU_BUTTON',
    MENU_BUTTON_EXPANDED: 'MENU_BUTTON_EXPANDED'
} as const;

export type ButtonVariations = typeof ButtonVariations[keyof typeof ButtonVariations];
