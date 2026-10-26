export const CardVariations = {
    DEFAULT: 'DEFAULT',
    SECTION: 'SECTION',
    ELEVATED: 'ELEVATED'
} as const;

export type CardVariations = typeof CardVariations[keyof typeof CardVariations];
