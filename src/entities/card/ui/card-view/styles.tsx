import styled from "styled-components";
import { colors, text11SemiBold, text15Regular, text15SemiBold } from "../../../../shared";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const Badges = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const Description = styled.p`
    margin: 0;
    ${text15Regular};
    line-height: 22px;
    color: ${colors.secondary};
`;

export const Divider = styled.div`
    height: 1px;
    background-color: ${colors.border};
`;

export const Meta = styled.div`
    display: flex;
    gap: 40px;
`;

export const MetaItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const MetaLabel = styled.span`
    ${text11SemiBold};
    letter-spacing: 0.55px;
    text-transform: uppercase;
    color: ${colors.secondary};
`;

export const MetaValue = styled.span`
    ${text15SemiBold};
    color: ${colors.primary};
`;

export const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    img {
        display: block;
        width: 90px;
        height: 60px;
        border-radius: 10px;
        object-fit: cover;
        background-color: ${colors.imagePlaceholder};
    }
`;
