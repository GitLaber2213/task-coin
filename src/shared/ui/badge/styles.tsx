import styled, { css } from "styled-components";
import { colors } from "../../colors";
import { text12SemiBold } from "../../typography";

const badge = css`
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;

    padding: 5px 10px;
    border-radius: 8px;
    ${text12SemiBold};
    white-space: nowrap;
`;

export const BlueBadge = styled.span`
    ${badge};
    background-color: ${colors.accentBackground};
    color: ${colors.accent};
`;

export const PurpleBadge = styled.span`
    ${badge};
    background-color: ${colors.purpleBackground};
    color: ${colors.purple};
`;

export const RedBadge = styled.span`
    ${badge};
    background-color: ${colors.redBackground};
    color: ${colors.error};
`;

export const OrangeBadge = styled.span`
    ${badge};
    background-color: ${colors.orangeBackground};
    color: ${colors.orange};
`;

export const GreenBadge = styled.span`
    ${badge};
    background-color: ${colors.greenBackground};
    color: ${colors.green};
`;

export const GrayBadge = styled.span`
    ${badge};
    background-color: ${colors.fieldBackground};
    color: ${colors.secondary};
`;
