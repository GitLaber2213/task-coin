import styled from "styled-components";
import { colors } from "../../shared";

export const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-height: 100vh;
    padding: 16px;
    background-color: ${colors.pageBackground};
`;
