import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  padding-top: 72px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-top: 64px;
  }
`;