import styled from "styled-components";
import { colors } from "../../colors";
import { text14Regular } from "../../typography";

type Props = {
    $error?: boolean;
};

export const DefaultTextarea = styled.textarea<Props>`
    display: block;
    box-sizing: border-box;

    width: 100%;
    height: 110px;
    padding: 12px 16px;
    border: none;
    outline: none;
    border-radius: 14px;
    resize: none;

    background-color: ${({ $error }) => ($error ? colors.errorBackground : colors.fieldBackground)};
    box-shadow: ${({ $error }) => ($error ? `inset 0 0 0 1.5px ${colors.error}` : "none")};
    ${text14Regular};
    color: ${colors.primary};

    &::placeholder {
        color: ${colors.secondary};
    }

    ${({ $error }) => !$error && `
        &:focus {
            box-shadow: inset 0 0 0 1.5px ${colors.primary};
        }
    `};
`;
