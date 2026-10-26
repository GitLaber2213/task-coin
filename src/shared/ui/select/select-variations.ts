export const SelectVariations = {
    DEFAULT: 'DEFAULT'
} as const;

export type SelectVariations = typeof SelectVariations[keyof typeof SelectVariations];
