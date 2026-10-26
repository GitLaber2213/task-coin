export const ImageUploadVariations = {
    DEFAULT: 'DEFAULT'
} as const;

export type ImageUploadVariations = typeof ImageUploadVariations[keyof typeof ImageUploadVariations];
