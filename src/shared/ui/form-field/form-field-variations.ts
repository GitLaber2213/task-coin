export const FormFieldVariations = {
    DEFAULT: 'DEFAULT'
} as const;

export type FormFieldVariations = typeof FormFieldVariations[keyof typeof FormFieldVariations];
