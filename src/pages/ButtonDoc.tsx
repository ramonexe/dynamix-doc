import { Botao } from 'dynamix-button';
import { CodeBlock } from '../components/CodeBlock';
import { Section } from '../components/layout/Section';

export default function ButtonDoc() {
    return (
        <Section>
            <h1>Button Component</h1>
            <p>Example to use Dynamix Button:</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Botao backgroundColor='crimson' hoverBackgroundColor='#aa112b' activeBackgroundColor='#770d1f'>Default Button</Botao>
                <Botao variant="outline" borderColor='crimson' textColor='crimson'>Outlined Button</Botao>
            </div>

            <CodeBlock>{`<Botao>Default Button</Botao>
<Botao variant="outlined">Outlined Button</Botao>`}</CodeBlock>
        </Section>
    );
}