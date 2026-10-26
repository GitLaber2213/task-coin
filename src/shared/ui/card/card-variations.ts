export const CardVariations = {
    DEFAULT: 'DEFAULT',
    SECTION: 'SECTION',
    ELEVATED: 'ELEVATED',
    PANEL: 'PANEL'
} as const;

export type CardVariations = typeof CardVariations[keyof typeof CardVariations];
