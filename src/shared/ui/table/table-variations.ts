export const TableVariations = {
    DEFAULT: 'DEFAULT',
    COMPACT: 'COMPACT'
} as const;

export type TableVariations = typeof TableVariations[keyof typeof TableVariations];
