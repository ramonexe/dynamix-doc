import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <SidebarContainer>
            <NavItem onClick={() => navigate('/')}>Home</NavItem>
            <Divider />
            <SectionTitle>Components</SectionTitle>
            <NavItem onClick={() => navigate('/button')}>Button</NavItem>
            <Divider />
            <SectionTitle>Layout</SectionTitle>
            <Divider />
            <SectionTitle>Utilities</SectionTitle>
        </SidebarContainer>
    );
}

const SidebarContainer = styled.aside`
  color: ${({ theme }) => theme.text || '#fff'};
  padding: 2rem;
  height: 100%;
`;

const SectionTitle = styled.h3`
  margin: 1.5rem 0 1rem 0;
  font-weight: 700;
`;

const NavItem = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.codeBackground || '#ccc'};
  margin: 1.5rem 0;
`;