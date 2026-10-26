import styled from "styled-components";
import { colors } from "../../colors";

export const DefaultCard = styled.div`
    box-sizing: border-box;
    padding: 48px;
    border-radius: 24px;
    background-color: ${colors.white};
    box-shadow: 0 2px 8px 0 rgba(24, 24, 76, 0.03), 0 8px 32px 0 rgba(24, 24, 76, 0.06);
`;

export const SectionCard = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 28px;
    border-radius: 20px;
    background-color: ${colors.white};
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
`;

export const PanelCard = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 24px;
    border-radius: 20px;
    background-color: ${colors.white};
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
`;

export const ElevatedCard = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 28px 32px;
    border-radius: 20px;
    background-color: ${colors.white};
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.02), 0 6px 24px 0 rgba(0, 0, 0, 0.06);
`;
