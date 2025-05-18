// src/components/Header.tsx
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Botao } from 'dynamix-button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const { mode, toggleTheme } = useTheme();
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <HeaderTitle onClick={() => navigate('/')}><Dynamix className='josefin'>Dynamix</Dynamix><Doc> Doc</Doc></HeaderTitle>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Botao variant='ghost' textColor='crimson' onClick={() => navigate('/button')}>Components</Botao>
                <Botao
                    onClick={toggleTheme}
                    variant="outline"
                    size="sm"
                    borderColor='crimson'
                    textColor='crimson'
                    icon={mode === 'light' ? <Moon /> : <Sun />}
                    iconPosition="right"
                >
                    Toggle Theme
                </Botao>
            </div>
        </HeaderContainer>
    );
}

const HeaderTitle = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;
