export const CardVariations = {
    DEFAULT: 'DEFAULT'
} as const;

export type CardVariations = typeof CardVariations[keyof typeof CardVariations];
