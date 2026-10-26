import styled from "styled-components";
import { colors } from "../../colors";
import { MEDIA } from "../../constants";

export const DefaultCard = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    padding: 48px;
    border-radius: 24px;
    background-color: ${colors.white};
    box-shadow: 0 2px 8px 0 rgba(24, 24, 76, 0.03), 0 8px 32px 0 rgba(24, 24, 76, 0.06);

    @media ${MEDIA.MOBILE} {
        padding: 32px 20px;
    }
`;

export const SectionCard = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 28px;
    border-radius: 20px;
    background-color: ${colors.white};
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);

    @media ${MEDIA.MOBILE} {
        padding: 20px 16px;
    }
`;

export const PanelCard = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 24px;
    border-radius: 20px;
    background-color: ${colors.white};
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);

    @media ${MEDIA.MOBILE} {
        padding: 20px 16px;
    }
`;

export const ElevatedCard = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 28px 32px;
    border-radius: 20px;
    background-color: ${colors.white};
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.02), 0 6px 24px 0 rgba(0, 0, 0, 0.06);

    @media ${MEDIA.MOBILE} {
        padding: 20px 16px;
    }
`;
