import styled from "styled-components";
import { colors } from "../../colors";
import { text12Medium, text13Medium } from "../../typography";

type Props = {
    $error?: boolean;
};

export const DefaultField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    min-width: 0;
`;

export const Label = styled.label<Props>`
    ${text13Medium};
    color: ${({ $error }) => ($error ? colors.error : colors.primary)};
`;

export const ErrorText = styled.p`
    margin: 0;
    ${text12Medium};
    color: ${colors.error};
`;
