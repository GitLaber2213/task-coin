export type Rate = {
    [endDate: string]: {
        [currency: string]: number;
    };
}

export type RatesResponse = {
    amount: number;
    base: string;
    end_date: string;
    rates: Rate;
    start_date: string;
};
