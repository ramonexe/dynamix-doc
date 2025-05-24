import styled from "styled-components";
import { Copy } from "lucide-react";
import { toast } from "react-toastify";

interface CodeBlockProps {
  children: string;
}

export function CodeBlock({ children }: CodeBlockProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    toast.dark("Copied to clipboard!", {
      position: "bottom-right",
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
    });
  };

  return (
    <Wrapper>
      <CopyButton onClick={handleCopy} aria-label="Copy code">
        <Copy size={16} />
      </CopyButton>
      <StyledPre>
        {children}
      </StyledPre>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 10px;
  right: 14px;
  background: ${({ theme }) => theme.codeBackground || "#eee"};
  color: ${({ theme }) => theme.codeText || "#333"};
  border: none;
  border-radius: 6px;
  padding: 0.2rem 0.7rem;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  z-index: 2;
  transition: background 0.2s;
  
  &:hover {
    background: #f8f8f829;
  }
`;

const StyledPre = styled.pre`
  background-color: ${({ theme }) => theme.codeBackground || '#eee'};
  color: ${({ theme }) => theme.codeText || theme.text};
  padding: 2rem 1rem 1rem 1rem;
  border-radius: 8px;
  font-family: monospace;
  font-size: 1rem;
  overflow-x: auto;
  box-sizing: border-box;
  white-space: pre-wrap;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 1.5rem 0.5rem 1rem 0.5rem;
  }
`;