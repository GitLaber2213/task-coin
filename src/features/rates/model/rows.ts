import { getBuy, getSurrender } from "../../../entities";
import type { RatesResponse } from "./types";

export type RateRow = {
    currency: string;
    course: number;
    surrender: number;
    buy: number;
    change: number;
};

export const buildRateRows = ({ rates }: RatesResponse): RateRow[] => {
    const dates = Object.keys(rates).sort();
    const latest = rates[dates[dates.length - 1]] ?? {};
    const previous = rates[dates[dates.length - 2]] ?? latest;

    return Object.entries(latest).map(([currency, course]) => ({
        currency,
        course,
        surrender: getSurrender(course),
        buy: getBuy(course),
        change: course - (previous[currency] ?? course)
    }));
};

export const formatRate = (value: number, compact = false) =>
    value.toFixed(compact && value >= 100 ? 2 : 4);

export const formatChange = (value: number) => {
    const formatted = Math.abs(value).toFixed(4);
    if (Number(formatted) === 0) return formatted;
    return `${value > 0 ? '+' : '-'}${formatted}`;
};
