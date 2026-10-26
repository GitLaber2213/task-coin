import type { RatesResponse } from "../model/types";

const RATES_URL = 'https://api.frankfurter.dev/v1';

export const getRates = async (startDate: Date): Promise<RatesResponse> => {
    const response = await fetch(`${RATES_URL}/${startDate.toISOString().slice(0, 10)}..?from=USD&to=AUD,BGN,EUR,GBP,JPY`);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
};
