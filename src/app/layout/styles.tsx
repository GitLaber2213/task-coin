import styled from "styled-components";
import { colors } from "../../shared";

export const Layout = styled.div`
    display: flex;
    min-height: 100vh;
`;

export const Main = styled.main`
    flex: 1;
    min-width: 0;
    box-sizing: border-box;
    padding: 28px 36px;
    background-color: ${colors.contentBackground};
`;
