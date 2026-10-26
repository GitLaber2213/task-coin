import { useEffect, useState } from "react";
import { Title, TitleVariations } from "../../../shared";
import { getRates } from "../api";
import { DEFAULT_RATE_PERIOD, type RatePeriod } from "../model/periods";
import { buildRateRows } from "../model/rows";
import type { RatesResponse } from "../model/types";
import { RateChart } from "./rate-chart";
import { RatesTable } from "./rates-table";
import { Content, DateBadge, Header, Layout, Status } from "./styles";

const DATE_FORMAT: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' };
const TIME_FORMAT: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };

export const Rates = () => {
    const [rates, setRates] = useState<RatesResponse>();
    const [updatedAt, setUpdatedAt] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selected, setSelected] = useState<string | null>(null);
    const [period, setPeriod] = useState<RatePeriod>(DEFAULT_RATE_PERIOD);

    useEffect(() => {
        const fetchRates = async () => {
            setIsLoading(true);
            try {
                const data = await getRates();
                setRates(data);
                setUpdatedAt(new Date().toLocaleTimeString('en-GB', TIME_FORMAT));
            } catch (error) {
                console.error('Error fetching rates:', error);
                setError('Failed to fetch rates: ' + error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchRates();
    }, []);

    const handleSelect = (currency: string) => {
        setSelected((prev) => (prev === currency ? null : currency));
    };

    const renderContent = () => {
        if (error) return <Status $error>{error}</Status>;
        if (isLoading || !rates?.rates) return <Status>Loading rates...</Status>;

        return (
            <RatesTable
                rows={buildRateRows(rates)}
                updatedAt={updatedAt}
                compact={Boolean(selected)}
                selected={selected}
                onSelect={handleSelect}
            />
        );
    };

    return (
        <Layout>
            <Content $compact={Boolean(selected)}>
                <Header>
                    <Title variant={TitleVariations.PAGE}>Exchange rates</Title>
                    {rates?.end_date && (
                        <DateBadge>{new Date(rates.end_date).toLocaleDateString('en-US', DATE_FORMAT)}</DateBadge>
                    )}
                </Header>
                {renderContent()}
            </Content>

            {rates?.rates && selected && (
                <RateChart
                    rates={rates.rates}
                    base={rates.base}
                    currency={selected}
                    period={period}
                    onPeriodChange={setPeriod}
                />
            )}
        </Layout>
    );
};
