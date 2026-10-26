import { getFlag } from "../../../../entities";
import { Table, TableVariations, type TableColumn } from "../../../../shared";
import { formatChange, formatRate, type RateRow } from "../../model/rows";
import { Currency } from "./styles";

type RatesTableProps = {
    rows: RateRow[];
    updatedAt: string;
    compact: boolean;
    selected: string | null;
    onSelect: (currency: string) => void;
};

export const RatesTable = ({ rows, updatedAt, compact, selected, onSelect }: RatesTableProps) => {
    const columns: TableColumn<RateRow>[] = [
        {
            key: 'currency',
            title: 'Currency',
            render: (row) => (
                <Currency>
                    <img src={getFlag(row.currency)} alt="" />
                    {row.currency}
                </Currency>
            )
        },
        { key: 'surrender', title: 'Surrender', render: (row) => formatRate(row.surrender, compact) },
        { key: 'buy', title: 'Buy', render: (row) => formatRate(row.buy, compact) },
        { key: 'course', title: 'Course', render: (row) => formatRate(row.course, compact) },
    ];

    if (!compact) {
        columns.push(
            { key: 'change', title: 'Change', render: (row) => formatChange(row.change) },
            { key: 'time', title: 'Time', render: () => updatedAt },
        );
    }

    return (
        <Table
            variant={compact ? TableVariations.COMPACT : TableVariations.DEFAULT}
            columns={columns}
            rows={rows}
            getRowKey={(row) => row.currency}
            activeRowKey={selected}
            onRowClick={(row) => onSelect(row.currency)}
        />
    );
};
