import styled from "styled-components";
import { colors } from "../../colors";
import { text22Bold, text26Bold } from "../../typography";

export const PageTitle = styled.h1`
    margin: 0;
    ${text26Bold};
    color: ${colors.primary};
`;

export const CardTitle = styled.h2`
    margin: 0;
    ${text22Bold};
    color: ${colors.primary};
`;
