import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 1.5rem 2rem;
    padding-top: 72px;
    gap: 1.5rem;

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 1.5rem 0;
        padding-top: 72px;
    }
`;