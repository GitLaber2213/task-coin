import { Fragment } from "react";
import { TableVariations } from "./table-variations";
import { Cell, CompactTable, DefaultTable, Divider, Header, Row } from "./styles";

export type TableColumn<T> = {
    key: string;
    title: string;
    render: (row: T) => React.ReactNode;
};

type Props<T> = {
    variant: TableVariations;
    columns: TableColumn<T>[];
    rows: T[];
    getRowKey: (row: T) => string;
    activeRowKey?: string | null;
    onRowClick?: (row: T) => void;
};

const variations = {
    [TableVariations.DEFAULT]: DefaultTable,
    [TableVariations.COMPACT]: CompactTable
};

export const Table = <T,>({ variant, columns, rows, getRowKey, activeRowKey, onRowClick }: Props<T>) => {
    const StyledTable = variations[variant];

    const handleKeyDown = (event: React.KeyboardEvent, row: T) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onRowClick?.(row);
        }
    };

    return (
        <StyledTable role="table">
            <Header role="row">
                {columns.map((column) => (
                    <Cell key={column.key} role="columnheader">{column.title}</Cell>
                ))}
            </Header>

            {rows.map((row) => {
                const key = getRowKey(row);
                const active = key === activeRowKey;

                return (
                    <Fragment key={key}>
                        <Divider />
                        <Row role="row" $active={active} $clickable={Boolean(onRowClick)}
                            aria-selected={active}
                            tabIndex={onRowClick ? 0 : undefined}
                            onClick={() => onRowClick?.(row)}
                            onKeyDown={(event) => handleKeyDown(event, row)}
                        >
                            {columns.map((column) => (
                                <Cell key={column.key} role="cell">{column.render(row)}</Cell>
                            ))}
                        </Row>
                    </Fragment>
                );
            })}
        </StyledTable>
    );
};
