// src/components/Header.tsx
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Botao } from 'dynamix-button';

export default function Header() {
    const { mode, toggleTheme } = useTheme();

    return (
        <HeaderContainer>
            <HeaderTitle><Dynamix className='josefin'>Dynamix</Dynamix><Doc> Doc</Doc></HeaderTitle>
            <Botao
                onClick={toggleTheme}
                variant="outline"
                size="sm"
                icon={mode === 'light' ? <Moon /> : <Sun />}
            >
                Toggle Theme
            </Botao>
        </HeaderContainer>
    );
}

const HeaderTitle = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

const Dynamix = styled.h1`
    margin-top: 0.15rem;
    font-weight: 700;
    font-style: italic;
    color: crimson;
`;

const Doc = styled.h2`
    font-weight: 400;
    color: ${({ theme }) => theme.text};
`;

const HeaderContainer = styled.header`
  width: 100vw;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;
