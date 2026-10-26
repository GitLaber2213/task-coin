export const TextareaVariations = {
    DEFAULT: 'DEFAULT'
} as const;

export type TextareaVariations = typeof TextareaVariations[keyof typeof TextareaVariations];
