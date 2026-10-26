import styled from "styled-components";
import { colors, MEDIA, text13Regular, text14SemiBold, text20Bold, text36Bold } from "../../../../shared";

type Props = {
    $positive: boolean;
};

export const Panel = styled.aside`
    flex: 0 0 420px;
    min-width: 0;

    @media ${MEDIA.TABLET} {
        flex: none;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Pair = styled.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    ${text20Bold};
    color: ${colors.primary};

    img {
        width: 20px;
        height: 15px;
        border-radius: 2px;
        object-fit: cover;
    }
`;

export const Subtitle = styled.p`
    margin: 0;
    ${text13Regular};
    color: ${colors.secondary};
`;

export const Summary = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const Value = styled.span`
    ${text36Bold};
    color: ${colors.primary};
`;

export const Change = styled.span<Props>`
    padding: 5px 10px;
    border-radius: 8px;
    background-color: ${({ $positive }) => ($positive ? colors.greenBackground : colors.errorBackground)};
    ${text14SemiBold};
    color: ${({ $positive }) => ($positive ? colors.green : colors.error)};
`;

export const Periods = styled.div`
    display: flex;
    gap: 8px;
`;
