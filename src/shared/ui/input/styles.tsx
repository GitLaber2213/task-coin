import styled from "styled-components";
import { colors } from "../../colors";
import { text14Regular, text15Regular, text18Regular } from "../../typography";

type Props = {
    $error?: boolean;
};

export const DefaultInput = styled.label<Props>`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    gap: 12px;

    width: 100%;
    height: 56px;
    padding: 16px 20px;
    border-radius: 16px;

    background-color: ${({ $error }) => ($error ? colors.errorBackground : colors.inputBackground)};
    box-shadow: ${({ $error }) => ($error ? `inset 0 0 0 1.5px ${colors.error}` : "none")};
    color: ${({ $error }) => ($error ? colors.error : colors.secondary)};

    ${({ $error }) => !$error && `
        &:focus-within {
            box-shadow: inset 0 0 0 1.5px ${colors.primary};
        }
    `};

    input {
        flex: 1;
        min-width: 0;
        padding: 0;
        border: none;
        outline: none;
        background-color: transparent;
        ${text15Regular};
        color: ${colors.primary};
    }

    &:has(input:disabled) {
        opacity: 0.6;
    }

    input:disabled {
        cursor: default;
    }

    input::placeholder {
        color: ${colors.secondary};
    }
`;

export const FormInput = styled.label<Props>`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    gap: 8px;

    width: 100%;
    padding: 14px 16px;
    border-radius: 14px;

    background-color: ${({ $error }) => ($error ? colors.errorBackground : colors.fieldBackground)};
    box-shadow: ${({ $error }) => ($error ? `inset 0 0 0 1.5px ${colors.error}` : "none")};

    ${({ $error }) => !$error && `
        &:focus-within {
            box-shadow: inset 0 0 0 1.5px ${colors.primary};
        }
    `};

    input {
        flex: 1;
        min-width: 0;
        padding: 0;
        border: none;
        outline: none;
        background-color: transparent;
        ${text14Regular};
        color: ${colors.primary};
    }

    &:has(input:disabled) {
        opacity: 0.6;
    }

    input:disabled {
        cursor: default;
    }

    input::placeholder {
        color: ${colors.secondary};
    }
`;

export const Icon = styled.span`
    ${text18Regular};
`;
