import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Columns = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 28px;
`;

export const Column = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 18px;
    min-width: 0;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
`;
