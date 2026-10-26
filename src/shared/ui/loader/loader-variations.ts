export const LoaderVariations = {
    BUTTON: 'BUTTON',
    PAGE: 'PAGE'
} as const;

export type LoaderVariations = typeof LoaderVariations[keyof typeof LoaderVariations];
