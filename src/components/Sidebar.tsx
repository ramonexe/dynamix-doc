import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { Component, LayoutPanelLeft, Menu, Paintbrush, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <>
      <SidebarMenuButton
        aria-label="Open sidebar"
        onClick={() => setOpen(true)}
      >
        <Menu size={28} />
      </SidebarMenuButton>
      <SidebarContainer ref={sidebarRef} $open={open}>
        <CloseButton
          aria-label="Close sidebar"
          onClick={() => setOpen(false)}
        >
          <X size={28} />
        </CloseButton>
        <SectionTitle><Component /> Components</SectionTitle>
        <NavItem
          $active={location.pathname === '/button'}
          onClick={() => handleNavigate('/button')}
        >
          Button
        </NavItem>
        <Divider />
        <SectionTitle><LayoutPanelLeft /> Layout</SectionTitle>
        <NavItem>Coming soon</NavItem>
        <Divider />
        <SectionTitle><Paintbrush /> Utilities</SectionTitle>
        <NavItem>Coming soon</NavItem>
      </SidebarContainer>
      {open && <SidebarOverlay onClick={() => setOpen(false)} />}
    </>
  );
}

const SidebarMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 38px;
  left: 16px;
  z-index: 1101;
  color: crimson;
  background: ${({ theme }) => theme.sidebar};
  border: 1px solid crimson;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  box-shadow: 0 2px 20px rgba(204, 27, 57, 0.377);
  transition: all 0.2s ease-in-out;

  @media (max-width: 900px) {
    display: block;
  }

  @media (max-width: 420px) {
    top: 78px;
    left: 16px;
  }
`;

const SidebarContainer = styled.aside<{ $open: boolean }>`
  color: ${({ theme }) => theme.text || '#fff'};
  padding: 1rem;
  height: 100%;
  min-width: 220px;
  max-width: 250px;
  background: ${({ theme }) => theme.sidebar};
  z-index: 1200;
  position: fixed;
  transition: all 0.2s ease-in-out;

      &::after {
      content: '';
      position: absolute;
      top: -5px;
      right: -32px;
      width: 32px;
      height: 32px;
      border-top: 6px solid ${({ theme }) => theme.sidebar};
      border-left: 6px solid ${({ theme }) => theme.sidebar};
      border-top-left-radius: 20px;
      pointer-events: none;
      z-index: 1;
      background: transparent;
      transition: all 0.2s ease-in-out;

      @media (max-width: 900px) {
        display: none;
      }
    }

  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    transform: translateX(${({ $open }) => ($open ? '0' : '-110%')});
    transition: transform 0.35s cubic-bezier(.77,0,.18,1), box-shadow 0.2s;
    padding: 3.5rem 1rem;
    box-shadow: ${({ $open }) => $open ? '2px 0 16px rgba(0,0,0,0.10)' : 'none'};
  }

  @media (max-width: 500px) {
    min-width: 70vw;
    max-width: 90vw;
    padding: 4rem 1rem;
  }
`;

const SidebarOverlay = styled.div`
  @media (max-width: 900px) {
    content: '';
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.18);
    z-index: 1199;
    animation: fadeIn 0.25s;
    backdrop-filter: blur(4px);
    transition: all 0.2s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 18px;
  right: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1201;
  color: ${({ theme }) => theme.text};
  transition: all 0.2s ease-in-out;
  transition: color 0.18s;

  &:hover {
    color: crimson;
  }

  @media (max-width: 900px) {
    display: block;
  }
`;

const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0 1rem 0;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;
`;

interface NavItemProps {
  $active?: boolean;
}

const NavItem = styled.div<NavItemProps>`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.3rem 0.5rem;
  transition: background 0.18s, color 0.18s;
  color: ${({ $active }) => ($active ? 'crimson' : 'inherit')};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.codeBackground || '#eee'};
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.codeBackground || '#ccc'};
  margin: 1.5rem 0;
  transition: all 0.2s ease-in-out;
`;