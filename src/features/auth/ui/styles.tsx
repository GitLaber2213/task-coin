import styled from "styled-components";
import { colors, text15Medium, text32Bold } from "../../../shared";

type Props = {
    $hasErrors?: boolean;
};

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 340px;
    max-width: 100%;
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: none;
`;

export const TitleGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const Title = styled.h1`
    margin: 0;
    ${text32Bold};
    color: ${colors.primary};
`;

export const Subtitle = styled.p`
    margin: 0;
    ${text15Medium};
    color: ${colors.secondary};
`;

export const Fields = styled.div<Props>`
    display: flex;
    flex-direction: column;
    gap: ${({ $hasErrors }) => ($hasErrors ? "12px" : "16px")};
    width: 100%;
`;
