import styled from "styled-components";
import { colors } from "../../colors";
import {
    text11Medium,
    text12Medium,
    text13Regular,
    text13SemiBold,
    text14Regular,
    text14SemiBold
} from "../../typography";

type RowProps = {
    $active?: boolean;
    $clickable?: boolean;
};

export const Header = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.secondary};
`;

export const Row = styled.div<RowProps>`
    display: flex;
    align-items: center;
    border-radius: 12px;
    outline: none;

    background-color: ${({ $active }) => ($active ? colors.accentBackground : "transparent")};
    color: ${colors.primary};

    cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

    &:focus-visible {
        box-shadow: inset 0 0 0 1.5px ${colors.accent};
    }
`;

export const Cell = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    min-width: 0;
    white-space: nowrap;
`;

export const Divider = styled.div`
    height: 1px;
    background-color: ${colors.divider};
`;

export const DefaultTable = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 4px 20px;
    border-radius: 20px;
    background-color: ${colors.white};
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);

    ${Header} {
        padding: 12px;
        ${text12Medium};
    }

    ${Row} {
        padding: 16px 12px;
        ${text14Regular};
    }

    ${Row}[aria-selected="true"] {
        ${text14SemiBold};
    }
`;

export const CompactTable = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 4px 16px;
    border-radius: 20px;
    background-color: ${colors.white};
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);

    ${Header} {
        padding: 10px 12px;
        ${text11Medium};
    }

    ${Row} {
        padding: 14px 12px;
        ${text13Regular};
    }

    ${Row}[aria-selected="true"] {
        ${text13SemiBold};
    }
`;
