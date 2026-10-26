import type { RatesResponse } from "../model/types";

const RATES_URL = 'https://api.frankfurter.dev/v1';

const start = new Date();
start.setDate(start.getDate() - 365);

export const getRates = async (): Promise<RatesResponse> => {
    const response = await fetch(`${RATES_URL}/${start.toISOString().slice(0, 10)}..?from=USD&to=AUD,BGN,BRL,CAD,CHF,EUR,GBP,JPY`);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
};
