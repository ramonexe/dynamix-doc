import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > * {
    width: 50%;
    min-width: 250px;
    max-width: 700px;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding-top: 1.5rem;

    > * {
      width: 98%;
      min-width: 180px;
      max-width: 100%;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    padding-top: 3rem;

    > * {
      width: 98%;
      min-width: 0;
    }
  }
`;