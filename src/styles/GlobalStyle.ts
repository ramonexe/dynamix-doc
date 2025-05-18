import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Montserrat', 'Josefin Sans', sans-serif;
    transition: background 0.2s ease-in, color 0.2s ease-in;

    .josefin {
        font-family: 'Josefin Sans', 'Montserrat', sans-serif;
    }
  }

  a {
    color: inherit;
  }

  code, pre {
    background-color: #eee;
    padding: 1rem;
    border-radius: 8px;
    font-family: monospace;
  }
`;

export default GlobalStyle;