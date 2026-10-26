import styled from "styled-components";
import { colors } from "../../colors";
import { text14Regular, text16Regular } from "../../typography";

type Props = {
    $error?: boolean;
};

export const DefaultSelect = styled.div<Props>`
    position: relative;
    width: 100%;

    select {
        display: block;
        box-sizing: border-box;
        appearance: none;

        width: 100%;
        padding: 14px 40px 14px 16px;
        border: none;
        outline: none;
        border-radius: 14px;

        background-color: ${({ $error }) => ($error ? colors.errorBackground : colors.fieldBackground)};
        box-shadow: ${({ $error }) => ($error ? `inset 0 0 0 1.5px ${colors.error}` : "none")};
        ${text14Regular};
        color: ${colors.primary};

        cursor: pointer;
    }

    select:has(option[value=""]:checked) {
        color: ${colors.secondary};
    }

    option {
        color: ${colors.primary};
    }

    ${({ $error }) => !$error && `
        select:focus {
            box-shadow: inset 0 0 0 1.5px ${colors.primary};
        }
    `};
`;

export const Arrow = styled.span`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    ${text16Regular};
    color: ${colors.secondary};
    pointer-events: none;
`;
