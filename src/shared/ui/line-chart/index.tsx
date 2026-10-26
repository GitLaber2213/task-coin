import { lazy, Suspense } from "react";
import { LineChartVariations } from "./line-chart-variations";
import { NegativeChart, PositiveChart } from "./styles";
import type { LineChartPoint } from "./types";

export type { LineChartPoint } from "./types";

const AreaChart = lazy(() => import("./area-chart"));

type Props = {
    variant: LineChartVariations;
    data: LineChartPoint[];
    label?: string;
    formatValue?: (value: number) => string;
    formatDate?: (date: string) => string;
};

const variations = {
    [LineChartVariations.POSITIVE]: PositiveChart,
    [LineChartVariations.NEGATIVE]: NegativeChart
};

export const LineChart = ({ variant, data, label, formatValue = String, formatDate = String }: Props) => {
    const StyledChart = variations[variant];

    return (
        <StyledChart role="img" aria-label={label} style={{padding: 0}} >
            {data.length > 0 && (
                <Suspense fallback={null}>
                    <AreaChart data={data} formatValue={formatValue} formatDate={formatDate} />
                </Suspense>
            )}
        </StyledChart>
    );
};
