import { Botao } from 'dynamix-button';
import { GithubIcon, Star } from 'lucide-react';
import styled from 'styled-components';
import { Container } from '../components/layout/Container';
import { useNavigate } from 'react-router-dom';
import example from '../assets/example.jpg';

export default function Home() {
    const navigate = useNavigate();

    const hrefToGithub = () => {
        window.open("https://github.com/ramonexe/dynamix-button", "_blank", "noopener,noreferrer");
    };

    const hrefToNpm = () => {
        window.open("https://www.npmjs.com/package/dynamix-button", "_blank", "noopener,noreferrer");
    };

    return (
        <Container>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
                <Title className='josefin'>Dynamix</Title>
                <Badges>
                    <img src="https://img.shields.io/npm/v/dynamix-button?color=%2300b894" alt="npm version" />
                    <img src="https://img.shields.io/npm/dt/dynamix-button" alt="downloads" />
                    <img src="https://img.shields.io/github/stars/ramonexe/dynamix-button?style=social" alt="GitHub stars" />
                </Badges>
                <Paragraph>
                    Official documentation of <strong>dynamix-button</strong>. <br />Here you will find examples and instructions on how to use the available components.
                </Paragraph>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'nowrap', width: 'fit-content' }}>
                    <Botao
                        onClick={hrefToGithub}
                        icon={<GithubIcon />}
                        iconPosition="right"
                        variant="outline"
                        borderColor="crimson"
                        textColor="crimson"
                    >
                        View on GitHub
                    </Botao>
                    <Botao
                        onClick={hrefToNpm}
                        icon={<Star />}
                        iconPosition="right"
                        variant="outline"
                        borderColor="crimson"
                        textColor="crimson"
                    >
                        View on NPMjs
                    </Botao>
                    <Botao
                        backgroundColor='crimson'
                        hoverBackgroundColor='#aa112b'
                        activeBackgroundColor='#770d1f'
                        onClick={() => navigate('/button')}
                    >
                        Get Started
                    </Botao>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', marginTop: '2rem' }}>
                <Image src={example} alt="example" />
                <Botao
                    backgroundColor='crimson'
                    hoverBackgroundColor='#aa112b'
                    activeBackgroundColor='#770d1f'
                >
                    Simple Button
                </Botao>
            </div>
        </Container>
    );
}

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  transition: filter 0.3s ease-in-out;
  cursor: default;

  &:hover {
    filter: drop-shadow(0 0 5em #fc334429);
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  font-style: italic;
  color: crimson;
  transition: filter 0.3s ease-in-out;
  cursor: default;

  &:hover {
    filter: drop-shadow(0 0 2em #fc3344);
  }
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