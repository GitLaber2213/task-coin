export const LineChartVariations = {
    POSITIVE: 'POSITIVE',
    NEGATIVE: 'NEGATIVE'
} as const;

export type LineChartVariations = typeof LineChartVariations[keyof typeof LineChartVariations];
