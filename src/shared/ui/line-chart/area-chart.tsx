import { Area, AreaChart as RechartsAreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, type TooltipContentProps } from "recharts";
import { Tooltip as StyledTooltip, TooltipDate, TooltipValue } from "./styles";
import type { LineChartPoint } from "./types";

type Props = {
    data: LineChartPoint[];
    formatValue: (value: number) => string;
    formatDate: (date: string) => string;
};

const getDomain = (data: LineChartPoint[]): [number, number] => {
    const values = data.map((point) => point.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || Math.abs(max) || 1;

    return [min - range / 3, max];
};

const AreaChart = ({ data, formatValue, formatDate }: Props) => {
    const renderTooltip = ({ active, payload }: TooltipContentProps) => {
        const point = payload?.[0]?.payload as LineChartPoint | undefined;
        if (!active || !point) return null;

        return (
            <StyledTooltip>
                <TooltipDate>{formatDate(point.date)}</TooltipDate>
                <TooltipValue>{formatValue(point.value)}</TooltipValue>
            </StyledTooltip>
        );
    };

    return (
        <ResponsiveContainer width="100%" height="95%" style={{ marginTop: '5%' }}>
            <RechartsAreaChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <XAxis dataKey="date" hide />
                <YAxis domain={getDomain(data)} hide />
                <Tooltip content={renderTooltip}
                    cursor={{ stroke: 'currentColor', strokeOpacity: 0.3, strokeDasharray: '3 3' }}
                />
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="currentColor"
                    fillOpacity={0.08}
                    activeDot={{ r: 4, fill: 'currentColor', stroke: '#ffffff', strokeWidth: 2 }}
                />
            </RechartsAreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChart;
