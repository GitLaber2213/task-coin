export const InputVariations = {
    DEFAULT: 'DEFAULT'
} as const;

export type InputVariations = typeof InputVariations[keyof typeof InputVariations];
