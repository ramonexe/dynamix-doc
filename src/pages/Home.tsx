import styled from 'styled-components';

export default function Home() {
    return (
        <Container>
            <Title>Bem-vindo à Documentação</Title>
            <Paragraph>
                Esta é a documentação oficial da <strong>dynamix-button</strong>. Aqui você encontrará exemplos e instruções de como utilizar os componentes disponíveis.
            </Paragraph>

            <Badges>
                <img src="https://img.shields.io/npm/v/dynamix-button?color=%2300b894" alt="npm version" />
                <img src="https://img.shields.io/npm/dt/dynamix-button" alt="downloads" />
                <img src="https://img.shields.io/github/stars/ramonexe/dynamix-button?style=social" alt="GitHub stars" />
            </Badges>

            <ButtonLink href="https://github.com/ramonexe/dynamix-button" target="_blank" rel="noopener noreferrer">
                🌟 Ver no GitHub
            </ButtonLink>

            <Paragraph>
                Use o menu lateral para navegar entre os componentes e visualizar exemplos reais com código de uso.
            </Paragraph>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const Badges = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ButtonLink = styled.a`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: #24292f;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  width: fit-content;
  transition: background 0.2s;

  &:hover {
    background-color: #444c56;
  }
`;