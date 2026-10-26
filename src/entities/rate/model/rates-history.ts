import type { Rate } from "./types";


export const sliceByDays = (rates: Rate, days: number) => {
    const from = new Date();
    from.setDate(from.getDate() - days);

    const fromIso = from.toISOString().slice(0, 10);
    
    return Object.entries(rates)
        .filter(([date]) => date >= fromIso)
        .map(([date, values]) => ({ date, ...values }));
};