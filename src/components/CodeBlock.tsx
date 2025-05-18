import styled from "styled-components";

export const CodeBlock = styled.pre`
  background-color: ${({ theme }) => theme.codeBackground || '#eee'};
  color: ${({ theme }) => theme.codeText || theme.text};
  padding: 2rem 1rem;
  border-radius: 8px;
  font-family: monospace;
  font-size: 1rem;
  overflow-x: auto;
`;