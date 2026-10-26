export const ButtonVariations = {
    DEFAULT_BUTTON: 'DEFAULT_BUTTON',
    ACTION_BUTTON: 'ACTION_BUTTON',
    OUTLINE_BUTTON: 'OUTLINE_BUTTON',
    MENU_BUTTON: 'MENU_BUTTON',
    MENU_BUTTON_EXPANDED: 'MENU_BUTTON_EXPANDED'
} as const;

export type ButtonVariations = typeof ButtonVariations[keyof typeof ButtonVariations];
