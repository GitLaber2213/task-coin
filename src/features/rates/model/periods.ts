export const RATE_PERIODS = [
    { value: '1W', days: 7, label: 'Weekly dynamics' },
    { value: '1M', days: 30, label: 'Monthly dynamics' },
    { value: '3M', days: 90, label: 'Quarterly dynamics' },
    { value: '6M', days: 180, label: 'Half-year dynamics' },
    { value: '1Y', days: 365, label: 'Yearly dynamics' },
] as const;

export type RatePeriod = typeof RATE_PERIODS[number]['value'];

export const DEFAULT_RATE_PERIOD: RatePeriod = '1M';
