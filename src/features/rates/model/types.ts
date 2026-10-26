import type { Rate } from "../../../entities";

export type RatesResponse = {
    amount: number;
    base: string;
    end_date: string;
    rates: Rate;
    start_date: string;
};
