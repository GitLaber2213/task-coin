import styled from "styled-components";
import { colors, text13SemiBold, text14Regular } from "../../../shared";

type Props = {
    $compact: boolean;
};

export const Layout = styled.div`
    display: flex;
    align-items: stretch;
    gap: 20px;
    min-height: calc(100vh - 56px);
`;

export const Content = styled.div<Props>`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: ${({ $compact }) => ($compact ? "16px" : "24px")};
    min-width: 0;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`;

export const DateBadge = styled.span`
    padding: 7px 14px;
    border-radius: 10px;
    background-color: ${colors.accentBackground};
    ${text13SemiBold};
    color: ${colors.accent};
    white-space: nowrap;
`;

export const LoaderWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Status =styled.p<{ $error?: boolean }>`
    margin: 0;
    ${text14Regular};
    color: ${({ $error }) => ($error ? colors.error : colors.secondary)};
`;
