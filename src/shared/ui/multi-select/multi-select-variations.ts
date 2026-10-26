export const MultiSelectVariations = {
    DEFAULT: 'DEFAULT'
} as const;

export type MultiSelectVariations = typeof MultiSelectVariations[keyof typeof MultiSelectVariations];
