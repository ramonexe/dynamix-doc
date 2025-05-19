import styled from "styled-components";

export const CodeBlock = styled.pre`
  background-color: ${({ theme }) => theme.codeBackground || '#eee'};
  color: ${({ theme }) => theme.codeText || theme.text};
  padding: 2rem 1rem;
  border-radius: 8px;
  font-family: monospace;
  font-size: 1rem;
  overflow-x: auto;
  box-sizing: border-box;
  white-space: pre-wrap;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 1.5rem 0.5rem;
  }
`;