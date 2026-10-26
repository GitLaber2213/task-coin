import styled from "styled-components";
import { colors } from "../../colors";
import {
    text10Medium,
    text10SemiBold,
    text14SemiBold,
    text15Medium,
    text15SemiBold,
    text16SemiBold
} from "../../typography";

type Props = {
    $active?: boolean;
    $fullWidth?: boolean;
};

export const DefaultButton = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
    height: 56px;
    padding: 16px 24px;
    border: none;
    outline: none;
    border-radius: 16px;

    background-color: ${colors.primary};
    box-shadow: 0 4px 16px 0 rgba(24, 24, 76, 0.25);
    ${text16SemiBold};
    color: ${colors.white};

    cursor: pointer;

    &:focus-visible {
        box-shadow: 0 0 0 3px rgba(24, 24, 76, 0.25);
    }

    &:disabled {
        opacity: 0.6;
        cursor: default;
    }
`;

export const ActionButton = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
    padding: 13px 28px;
    border: none;
    outline: none;
    border-radius: 14px;

    background-color: ${colors.primary};
    box-shadow: 0 4px 12px 0 rgba(24, 24, 76, 0.2);
    ${text14SemiBold};
    color: ${colors.white};
    white-space: nowrap;

    cursor: pointer;

    &:focus-visible {
        box-shadow: 0 0 0 3px rgba(24, 24, 76, 0.25);
    }

    &:disabled {
        opacity: 0.6;
        cursor: default;
    }
`;

export const OutlineButton = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
    padding: 13px 28px;
    border: none;
    outline: none;
    border-radius: 14px;

    background-color: transparent;
    box-shadow: inset 0 0 0 1.5px ${colors.border};
    ${text14SemiBold};
    color: ${colors.secondary};
    white-space: nowrap;

    cursor: pointer;

    &:focus-visible {
        box-shadow: inset 0 0 0 1.5px ${colors.primary};
    }

    &:disabled {
        opacity: 0.6;
        cursor: default;
    }
`;

export const MenuButton = styled.button<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 4px;

    width: 100%;
    padding: 10px 0;
    border: none;
    outline: none;
    border-radius: 14px;

    background-color: ${({ $active }) => ($active ? colors.accentBackground : "transparent")};
    ${({ $active }) => ($active ? text10SemiBold : text10Medium)};
    color: ${({ $active }) => ($active ? colors.accent : colors.secondary)};

    cursor: pointer;

    &:focus-visible {
        box-shadow: inset 0 0 0 1.5px ${colors.accent};
    }

    &:disabled {
        cursor: default;
    }
`;

export const MenuButtonExpanded = styled.button<Props>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    gap: 12px;

    width: 100%;
    padding: 12px 14px;
    border: none;
    outline: none;
    border-radius: 14px;

    background-color: ${({ $active }) => ($active ? colors.accentBackground : "transparent")};
    ${({ $active }) => ($active ? text15SemiBold : text15Medium)};
    color: ${({ $active }) => ($active ? colors.accent : colors.primary)};
    text-align: left;
    white-space: nowrap;

    cursor: pointer;

    &:focus-visible {
        box-shadow: inset 0 0 0 1.5px ${colors.accent};
    }

    &:disabled {
        cursor: default;
    }
`;
