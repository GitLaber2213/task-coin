import styled from "styled-components";
import { colors, MEDIA } from "../../shared";

export const Layout = styled.div`
    display: flex;
    min-height: 100vh;

    @media ${MEDIA.MOBILE} {
        flex-direction: column;

        & > nav {
            position: fixed;
            top: auto;
            right: 0;
            bottom: 0;
            left: 0;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 8px;

            width: 100%;
            height: auto;
            padding: 6px 12px calc(6px + env(safe-area-inset-bottom));

            box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.06);
            z-index: 10;
        }

        & > nav > button {
            flex: 1;
            width: auto;
            max-width: 120px;
        }
    }
`;

export const Main = styled.main`
    --content-min-height: calc(100vh - 56px);

    flex: 1;
    min-width: 0;
    box-sizing: border-box;
    padding: 28px 36px;
    background-color: ${colors.contentBackground};

    @media ${MEDIA.TABLET} {
        --content-min-height: calc(100vh - 48px);

        padding: 24px;
    }

    @media ${MEDIA.MOBILE} {
        --content-min-height: calc(100vh - 112px);

        padding: 16px 16px calc(96px + env(safe-area-inset-bottom));
    }
`;
