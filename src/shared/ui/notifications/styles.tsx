import styled, { css, keyframes } from "styled-components";
import { colors } from "../../colors";
import { MEDIA } from "../../constants";
import { text14Medium, text16SemiBold } from "../../typography";

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(24px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Stack = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 360px;
    max-width: calc(100vw - 40px);
    z-index: 100;
    pointer-events: none;

    @media ${MEDIA.MOBILE} {
        top: 12px;
        right: 12px;
        left: 12px;
        width: auto;
        max-width: none;
    }
`;

const notification = css`
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    gap: 12px;

    padding: 14px 16px;
    border-radius: 14px;
    box-shadow: 0 6px 24px 0 rgba(24, 24, 76, 0.16);
    color: ${colors.white};

    pointer-events: auto;
    animation: ${slideIn} 0.2s ease-out;
`;

export const SuccessNotification = styled.div`
    ${notification};
    background-color: ${colors.green};
`;

export const ErrorNotification = styled.div`
    ${notification};
    background-color: ${colors.error};
`;

export const Message = styled.p`
    flex: 1;
    min-width: 0;
    margin: 0;
    ${text14Medium};
    line-height: 20px;
    white-space: pre-line;
    overflow-wrap: anywhere;
`;

export const CloseButton = styled.button`
    flex-shrink: 0;
    padding: 0;
    border: none;
    outline: none;
    border-radius: 6px;
    background-color: transparent;
    ${text16SemiBold};
    line-height: 20px;
    color: inherit;
    opacity: 0.8;

    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    &:focus-visible {
        box-shadow: 0 0 0 2px ${colors.white};
    }
`;
