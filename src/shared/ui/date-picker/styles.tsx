import styled from "styled-components";
import { colors } from "../../colors";
import { text14Regular, text16Regular } from "../../typography";

type Props = {
    $error?: boolean;
};

export const DefaultDatePicker = styled.div<Props>`
    position: relative;
    width: 100%;

    .react-datepicker-wrapper,
    .react-datepicker__input-container {
        display: block;
        width: 100%;
    }

    input {
        display: block;
        box-sizing: border-box;

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

    input::placeholder {
        color: ${colors.secondary};
    }

    ${({ $error }) => !$error && `
        input:focus {
            box-shadow: inset 0 0 0 1.5px ${colors.primary};
        }
    `};
`;

export const CalendarIcon = styled.span`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    ${text16Regular};
    pointer-events: none;
`;
