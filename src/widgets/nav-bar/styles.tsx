import styled from "styled-components";
import {
    colors,
    text11SemiBold,
    text18Regular,
    text20Bold,
    text20Regular,
    text22Regular,
    text24Regular,
    text28Regular
} from "../../shared";

type Props = {
    $expanded: boolean;
};

export const Sidebar = styled.nav<Props>`
    position: sticky;
    top: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: ${({ $expanded }) => ($expanded ? "stretch" : "center")};
    box-sizing: border-box;
    gap: ${({ $expanded }) => ($expanded ? "4px" : "0")};

    width: ${({ $expanded }) => ($expanded ? "240px" : "72px")};
    height: 100vh;
    padding: ${({ $expanded }) => ($expanded ? "24px 20px" : "20px 10px")};

    background-color: ${colors.white};
    box-shadow: ${({ $expanded }) => ($expanded
        ? "4px 0 20px 0 rgba(0, 0, 0, 0.08)"
        : "2px 0 8px 0 rgba(0, 0, 0, 0.04)")};
    transition: width 0.2s ease;
    overflow: hidden;
    z-index: 1;
`;

export const LogoButton = styled.button<Props>`
    display: flex;
    align-items: center;
    gap: 10px;

    width: 100%;
    height: ${({ $expanded }) => ($expanded ? "auto" : "44px")};
    padding: ${({ $expanded }) => ($expanded ? "0 0 16px" : "0")};
    justify-content: ${({ $expanded }) => ($expanded ? "flex-start" : "center")};
    border: none;
    outline: none;
    border-radius: 14px;
    background-color: transparent;
    white-space: nowrap;

    cursor: pointer;

    &:focus-visible {
        box-shadow: inset 0 0 0 1.5px ${colors.accent};
    }
`;

export const Logo = styled.span<Props>`
    ${({ $expanded }) => ($expanded ? text28Regular : text24Regular)};
`;

export const LogoTitle = styled.span`
    ${text20Bold};
    color: ${colors.primary};
`;

export const Divider = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.divider};
`;

export const MenuTitle = styled.p`
    margin: 16px 0 8px;
    ${text11SemiBold};
    letter-spacing: 1.1px;
    color: ${colors.secondary};
`;

export const Spacer = styled.div<{ $size: number }>`
    flex-shrink: 0;
    height: ${({ $size }) => $size}px;
`;

export const Grow = styled.div`
    flex: 1;
`;

export const ItemIcon = styled.span<Props>`
    ${({ $expanded }) => ($expanded ? text20Regular : text22Regular)};
`;

export const LogoutIcon = styled.span<Props>`
    ${({ $expanded }) => ($expanded ? text20Regular : text18Regular)};
`;

export const LogoutLabel = styled.span<Props>`
    color: ${({ $expanded }) => ($expanded ? colors.error : "inherit")};
`;
