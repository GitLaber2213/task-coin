import styled, { css, keyframes } from "styled-components";
import { colors } from "../../colors";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const spinner = css`
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-color: currentColor;
    border-right-color: transparent;
    border-radius: 50%;

    animation: ${spin} 0.7s linear infinite;
`;

export const ButtonLoader = styled.span`
    ${spinner};
    width: 20px;
    height: 20px;
    border-width: 2px;
`;

export const PageLoader = styled.span`
    ${spinner};
    width: 40px;
    height: 40px;
    border-width: 3px;
    color: ${colors.primary};
`;
