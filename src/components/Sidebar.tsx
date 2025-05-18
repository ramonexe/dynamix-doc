import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <SidebarContainer>
            <h2>Componentes</h2>
            <NavItem onClick={() => navigate('/')}>Home</NavItem>
            <NavItem onClick={() => navigate('/button')}>Button</NavItem>
        </SidebarContainer>
    );
}

const SidebarContainer = styled.aside`
  background-color: #222;
  color: white;
  padding: 2rem;
  height: 100%;
`;

const NavItem = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;