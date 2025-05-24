import styled from "styled-components";

export const ContentArea = styled.div`
  padding: 2rem;

  @media (max-width: 900px) {
    padding: 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }

  @media (max-width: 420px) {
    padding: 0.5rem;
  }
`;