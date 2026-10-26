import styled from "styled-components";
import { colors } from "../../colors";
import { text12Medium, text15Regular, text18Regular } from "../../typography";

type Props = {
    $error?: boolean;
};

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
`;

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

    input::placeholder {
        color: ${colors.secondary};
    }
`;

export const Icon = styled.span`
    ${text18Regular};
`;

export const ErrorText = styled.p`
    margin: 0;
    ${text12Medium};
    color: ${colors.error};
`;
