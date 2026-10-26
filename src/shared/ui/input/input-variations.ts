export const InputVariations = {
    DEFAULT: 'DEFAULT',
    FORM: 'FORM'
} as const;

export type InputVariations = typeof InputVariations[keyof typeof InputVariations];
