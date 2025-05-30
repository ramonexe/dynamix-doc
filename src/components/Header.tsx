import styled, { css } from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from 'dynamix-button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function useIsLarge() {
  const [isLarge, setIsLarge] = useState(() => window.innerWidth >= 900);

  useEffect(() => {
    function handleResize() {
      setIsLarge(window.innerWidth >= 900);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLarge;
}

export default function Header() {
  const { mode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const isLarge = useIsLarge();

  return (
    <HeaderContainer $notHome={location.pathname !== '/'}>
      <HeaderTitle onClick={() => navigate('/')}><Dynamix className='josefin'>Dynamix</Dynamix><Doc> Doc</Doc></HeaderTitle>
      <DivButtons>
        <Button variant='ghost' textColor='crimson' onClick={() => navigate('/')} size={isLarge ? undefined : 'sm'}>Home</Button>
        <Button variant='ghost' textColor='crimson' onClick={() => navigate('/button')} size={isLarge ? undefined : 'sm'}>Components</Button>
        <Theme
          onClick={toggleTheme}
        >
          {mode === 'light' ? <Moon /> : <Sun />}
        </Theme>
      </DivButtons>
    </HeaderContainer>
  );
}

const Theme = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: crimson;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #ff4d4d;
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

const DivButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    gap: 0.2rem;
  }

  @media (max-width: 420px) {
    gap: 0rem;
  }
`;

const HeaderContainer = styled.header<{ $notHome: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 1000;
  background: ${({ theme }) => theme.header};
  transition: all 0.2s ease-in-out;

  @media (max-width: 900px) {
    gap: 0.5rem;
    padding: 0.7rem 0.5rem;
    ${({ $notHome }) =>
    $notHome &&
    css`
        padding-left: 4.5rem;
      `}
  }

  @media (max-width: 420px) {
    padding-left: 0;
    flex-direction: column;
  }
`;

const HeaderTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

const Dynamix = styled.h1`
  margin-top: 0.15rem;
  font-weight: 700;
  font-style: italic;
  color: crimson;
  font-size: 2rem;
  transition: all 0.2s ease-in-out;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Doc = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;