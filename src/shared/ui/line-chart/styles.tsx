import styled, { css } from "styled-components";
import { colors } from "../../colors";
import { text12Medium, text13SemiBold } from "../../typography";

const chart = css`
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    padding: 5px 11px;
    border-radius: 14px;
    overflow: hidden;

    .recharts-surface {
        overflow: visible;
    }

    .recharts-wrapper:focus,
    .recharts-surface:focus {
        outline: none;
    }
`;

export const PositiveChart = styled.div`
    ${chart};
    background-color: ${colors.chartBackground};
    color: ${colors.green};
`;

export const NegativeChart = styled.div`
    ${chart};
    background-color: ${colors.errorBackground};
    color: ${colors.error};
`;

export const Tooltip = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    padding: 8px 10px;
    border-radius: 10px;
    background-color: ${colors.white};
    box-shadow: 0 4px 16px 0 rgba(24, 24, 76, 0.12);
`;

export const TooltipDate = styled.span`
    ${text12Medium};
    color: ${colors.secondary};
`;

export const TooltipValue = styled.span`
    ${text13SemiBold};
    color: ${colors.primary};
`;
