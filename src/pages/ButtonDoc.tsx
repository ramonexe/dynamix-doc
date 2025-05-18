import { Botao } from 'dynamix-button';
import styled from 'styled-components';

export default function ButtonDoc() {
    return (
        <Section>
            <h1>Botão</h1>
            <p>Este é o componente de botão da sua biblioteca:</p>

            <Botao>Botão padrão</Botao>
            <Botao variant="outline">Botão outlined</Botao>

            <pre>{`
                <Botao>Botão padrão</Botao>
                <Botao variant="outlined">Botão outlined</Botao>
            `}</pre>
        </Section>
    );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;