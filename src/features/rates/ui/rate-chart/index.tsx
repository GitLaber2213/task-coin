import { getCurrencyHistory, getFlag, type Rate } from "../../../../entities";
import {
    Button,
    ButtonVariations,
    Card,
    CardVariations,
    LineChart,
    LineChartVariations
} from "../../../../shared";
import { RATE_PERIODS, type RatePeriod } from "../../model/periods";
import { formatRate } from "../../model/rows";
import { Change, Content, Heading, Pair, Panel, Periods, Subtitle, Summary, Value } from "./styles";

type RateChartProps = {
    rates: Rate;
    base: string;
    currency: string;
    period: RatePeriod;
    onPeriodChange: (period: RatePeriod) => void;
};

const DATE_FORMAT: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' };

const formatChartDate = (date: string) => new Date(date).toLocaleDateString('en-US', DATE_FORMAT);

export const RateChart = ({ rates, base, currency, period, onPeriodChange }: RateChartProps) => {
    const activePeriod = RATE_PERIODS.find((item) => item.value === period) ?? RATE_PERIODS[0];
    const history = getCurrencyHistory(rates, currency, activePeriod.days);

    const first = history[0]?.value ?? 0;
    const last = history[history.length - 1]?.value ?? 0;
    const change = first ? ((last - first) / first) * 100 : 0;
    const positive = change >= 0;

    return (
        <Panel>
            <Card variant={CardVariations.PANEL}>
                <Content>
                    <Heading>
                        <Pair>
                            <img src={getFlag(currency)} alt="" />
                            {currency} / {base}
                        </Pair>
                        <Subtitle>{activePeriod.label}</Subtitle>
                    </Heading>

                    <Summary>
                        <Value>{formatRate(last)}</Value>
                        <Change $positive={positive}>
                            {positive ? '▲' : '▼'} {positive ? '+' : ''}{change.toFixed(2)}%
                        </Change>
                    </Summary>

                    <LineChart
                        variant={positive ? LineChartVariations.POSITIVE : LineChartVariations.NEGATIVE}
                        data={history}
                        label={`${currency} / ${base}, ${activePeriod.label.toLowerCase()}`}
                        formatValue={(value) => formatRate(value)}
                        formatDate={formatChartDate}
                    />

                    <Periods>
                        {RATE_PERIODS.map((item) => (
                            <Button key={item.value} variant={ButtonVariations.TAB_BUTTON}
                                active={item.value === period}
                                aria-pressed={item.value === period}
                                onClick={() => onPeriodChange(item.value)}
                            >
                                {item.value}
                            </Button>
                        ))}
                    </Periods>
                </Content>
            </Card>
        </Panel>
    );
};
