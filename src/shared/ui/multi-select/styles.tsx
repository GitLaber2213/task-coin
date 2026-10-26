import styled from "styled-components";
import { colors } from "../../colors";
import { text14Regular } from "../../typography";

type Props = {
    $error?: boolean;
};

export const DefaultMultiSelect = styled.div<Props>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    gap: 8px;

    width: 100%;
    padding: 10px 12px;
    border-radius: 14px;

    background-color: ${({ $error }) => ($error ? colors.errorBackground : colors.fieldBackground)};
    box-shadow: ${({ $error }) => ($error ? `inset 0 0 0 1.5px ${colors.error}` : "none")};

    ${({ $error }) => !$error && `
        &:focus-within {
            box-shadow: inset 0 0 0 1.5px ${colors.primary};
        }
    `};

    select {
        flex: 1;
        min-width: 80px;
        appearance: none;

        padding: 4px;
        border: none;
        outline: none;
        background-color: transparent;
        ${text14Regular};
        color: ${colors.secondary};

        cursor: pointer;
    }

    option {
        color: ${colors.primary};
    }
`;

export const RemoveButton = styled.button`
    display: flex;
    padding: 0;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: transparent;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:focus-visible {
        box-shadow: 0 0 0 1.5px ${colors.primary};
    }
`;
