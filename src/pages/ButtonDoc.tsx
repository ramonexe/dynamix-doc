import { Botao } from 'dynamix-button';
import styled from 'styled-components';
import { CodeBlock } from '../components/CodeBlock';

export default function ButtonDoc() {
    return (
        <Section>
            <h1>Botão</h1>
            <p>Este é o componente de botão da sua biblioteca:</p>

            <Botao>Botão padrão</Botao>
            <Botao variant="outline">Botão outlined</Botao>

            <CodeBlock>{`
<Botao>Botão padrão</Botao>
<Botao variant="outlined">Botão outlined</Botao>
            `}</CodeBlock>
        </Section>
    );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;