import type { Rate } from "./types";


const getFromIso = (days: number) => {
    const from = new Date();
    from.setDate(from.getDate() - days);

    return from.toISOString().slice(0, 10);
};

export const sliceByDays = (rates: Rate, days: number) => {
    const fromIso = getFromIso(days);

    return Object.entries(rates)
        .filter(([date]) => date >= fromIso)
        .map(([date, values]) => ({ date, ...values }));
};

export const getCurrencyHistory = (rates: Rate, currency: string, days: number) => {
    const fromIso = getFromIso(days);

    return Object.entries(rates)
        .filter(([date, values]) => date >= fromIso && values[currency] !== undefined)
        .map(([date, values]) => ({ date, value: values[currency] }));
};
