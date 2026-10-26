export const DatePickerVariations = {
    DEFAULT: 'DEFAULT'
} as const;

export type DatePickerVariations = typeof DatePickerVariations[keyof typeof DatePickerVariations];
