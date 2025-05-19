import { Button } from 'dynamix-button';
import { ArrowRight, GithubIcon, Star } from 'lucide-react';
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
            <ContentWrapper>
                <Title className='josefin'>Dynamix</Title>
                <Badges>
                    <img src="https://img.shields.io/npm/v/dynamix-button?color=%2300b894" alt="npm version" />
                    <img src="https://img.shields.io/npm/dt/dynamix-button" alt="downloads" />
                    <img src="https://img.shields.io/github/stars/ramonexe/dynamix-button?style=social" alt="GitHub stars" />
                </Badges>
                <Paragraph>
                    Official documentation of <strong>dynamix-button</strong>. <br />Here you will find examples and instructions on how to use the available components.
                </Paragraph>

                <ButtonGroup>
                    <Button
                        onClick={hrefToGithub}
                        icon={<GithubIcon />}
                        iconPosition="right"
                        variant="outline"
                    >
                        View on GitHub
                    </Button>
                    <Button
                        onClick={hrefToNpm}
                        icon={<Star />}
                        iconPosition="right"
                        variant="outline"
                    >
                        View on NPMjs
                    </Button>
                    <Button onClick={() => navigate('/button')} icon={<ArrowRight />} iconPosition='right' alwaysShowText>Get Started</Button>
                </ButtonGroup>
            </ContentWrapper>
            <Example>
                <Image src={example} alt="example" />
                <Button>Example</Button>
            </Example>
        </Container>
    );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 700px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const Example = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 700px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 5px;
  filter: drop-shadow(10em 10em 7em #fc334429);
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

  @media (max-width: 900px) {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 900px) {
    font-size: 0.95rem;
    text-align: center;
  }
`;

const Badges = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: fit-content;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
  }
`;