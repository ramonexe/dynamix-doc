// src/components/Header.tsx
import styled, { css } from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from 'dynamix-button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const { mode, toggleTheme } = useTheme();
    const navigate = useNavigate();

    return (
        <HeaderContainer $notHome={location.pathname !== '/'}>
            <HeaderTitle onClick={() => navigate('/')}><Dynamix className='josefin'>Dynamix</Dynamix><Doc> Doc</Doc></HeaderTitle>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Button variant='ghost' textColor='crimson' onClick={() => navigate('/button')}>Components</Button>
                <Button
                    onClick={toggleTheme}
                    variant="outline"
                    size="sm"
                    borderColor='crimson'
                    textColor='crimson'
                    icon={mode === 'light' ? <Moon /> : <Sun />}
                    iconPosition="right"
                >
                    Toggle Theme
                </Button>
            </div>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header<{ $notHome: boolean }>`
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
  z-index: 1000;
  background: ${({ theme }) => theme.header};

  @media (max-width: 900px) {
    gap: 0.5rem;
    padding: 0.7rem 0.5rem;
    ${({ $notHome }) =>
        $notHome &&
        css`
        padding-left: 5rem;
      `}
  }

  @media (max-width: 400px) {
    padding-left: 0;
    flex-direction: column;
  }
`;

const HeaderTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Dynamix = styled.h1`
  margin-top: 0.15rem;
  font-weight: 700;
  font-style: italic;
  color: crimson;
  font-size: 2rem;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Doc = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;