import styled from "styled-components";
import { colors } from "../../colors";
import { text10Regular, text13Regular, text13SemiBold, text28Regular } from "../../typography";

type Props = {
    $dragging?: boolean;
};

export const DefaultDropzone = styled.button<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 6px;

    width: 100%;
    height: 120px;
    padding: 0;
    border: 2px dashed ${({ $dragging }) => ($dragging ? colors.accent : colors.border)};
    outline: none;
    border-radius: 14px;
    background-color: ${({ $dragging }) => ($dragging ? colors.accentBackground : "transparent")};

    cursor: pointer;

    &:focus-visible {
        border-color: ${colors.primary};
    }
`;

export const CloudIcon = styled.span`
    ${text28Regular};
`;

export const DropzoneText = styled.span`
    ${text13Regular};
    color: ${colors.secondary};
`;

export const DropzoneLink = styled.span`
    ${text13SemiBold};
    color: ${colors.accent};
`;

export const Previews = styled.div<Props>`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    width: 100%;
    border-radius: 10px;
    outline: ${({ $dragging }) => ($dragging ? `2px dashed ${colors.accent}` : "none")};
`;

export const Preview = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 4px;

    min-width: 0;
    padding: 4px 4px 6px;
    border-radius: 10px;
    background-color: ${colors.fieldBackground};
`;

export const PreviewImage = styled.div`
    position: relative;
    height: 64px;
    border-radius: 8px;
    overflow: hidden;
    background-color: ${colors.imagePlaceholder};

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const RemoveButton = styled.button`
    position: absolute;
    top: 6px;
    right: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 12px;
    height: 12px;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;

    cursor: pointer;

    img {
        width: 10px;
        height: 12px;
    }

    &:focus-visible {
        box-shadow: 0 0 0 1.5px ${colors.error};
    }
`;

export const FileName = styled.span`
    ${text10Regular};
    color: ${colors.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
