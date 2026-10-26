import styled from "styled-components";
import { MEDIA } from "../../../shared";

export const Preview = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const PreviewActions = styled.div`
    display: flex;
    gap: 12px;

    @media ${MEDIA.MOBILE} {
        & > * {
            flex: 1;
        }
    }
`;
