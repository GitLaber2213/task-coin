import { useEffect, useState } from "react";
import { getBuy, getFlag, getSurrender } from "../../../entities";
import { getRates } from "../api";
import type { RatesResponse } from "../model/types";

const start = new Date();
start.setDate(start.getDate() - 365);

export const Rates = () => {
    const [rates, setRates] = useState<RatesResponse>();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchRates = async () => {
            setIsLoading(true);
            try {
                const data = await getRates(start);
                setRates(data);
            } catch (error) {
                console.error('Error fetching rates:', error);
                setError('Failed to fetch rates: ' + error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchRates();
    }, []);

    if (isLoading && !rates || !rates?.rates) {
        return <p>Loading rates...</p>;
    };

    if (error) {
        return <p>{error}</p>;
    };

    return (
        <div>
            <h1>Rates</h1>
            <p>Amount: {rates.amount}</p>
            <p>Base: {rates.base}</p>
            <p>End Date: {rates.end_date}</p>
            <p>Start Date: {rates.start_date}</p>
            {Object.entries(rates.rates[rates.end_date]).map(([currency, rate]) => (
                <div key={currency}>
                    <img src={getFlag(currency)} alt={`${currency} Flag`} style={{ width: '25px', height: '18px', marginRight: '5px' }} />
                    <strong>{currency}:</strong> {rate} - Surrender: {getSurrender(rate).toFixed(4)} Buy: {getBuy(rate).toFixed(4)}
                    
                </div>
            ))}

            {/* {sliceByDays(rates.rates, 7).map(({ date, ...values }) => (
                <div key={date}>
                    <h3>{date}</h3>
                    {Object.entries(values).map(([currency, rate]) => (
                        <p key={currency}>
                            <img src={getFlag(currency)} alt={`${currency} Flag`} style={{ width: '25px', height: '18px', marginRight: '5px' }} />
                            <strong>{currency}:</strong> {rate} - Surrender: {getSurrender(rate).toFixed(4)} Buy: {getBuy(rate).toFixed(4)}
                        </p>
                    ))}
                </div>
            ))} */}

        </div>
    );
};  