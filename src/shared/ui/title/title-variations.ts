export const TitleVariations = {
    PAGE: 'PAGE',
    CARD: 'CARD'
} as const;

export type TitleVariations = typeof TitleVariations[keyof typeof TitleVariations];
