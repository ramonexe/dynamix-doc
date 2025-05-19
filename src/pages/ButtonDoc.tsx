import { Button } from 'dynamix-button';
import { CodeBlock } from '../components/CodeBlock';
import { Section } from '../components/layout/Section';
import { Heart, Send, Settings, User, Download } from 'lucide-react';

export default function ButtonDoc() {
    return (
        <Section>
            <h1>Button Component basic usage</h1>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 16 }}>
                <Button onClick={() => alert('Clicked!')}>Click here</Button>
                <Button icon={<Heart />}>Favorite</Button>
            </div>
            <CodeBlock>{`import { Button } from 'dynamix-button';
import { Heart } from 'lucide-react';

<Button onClick={() => alert('Clicked!')}>Click here</Button>
<Button icon={<Heart />}>Favorite</Button>
`}</CodeBlock>

            <h2>Variants</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 16 }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
            </div>
            <CodeBlock>{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
`}</CodeBlock>

            <h2>Sizes</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 16 }}>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
            </div>
            <CodeBlock>{`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
`}</CodeBlock>

            <h2>Button with Icon (Hover Expansion)</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 16 }}>
                <Button icon={<Send />}>Send</Button>
                <Button icon={<Send />} iconPosition="right">Send</Button>
            </div>
            <CodeBlock>{`import { Send } from 'lucide-react';

<Button icon={<Send />}>Send</Button>
<Button icon={<Send />} iconPosition="right">Send</Button>
`}</CodeBlock>

            <h2>Loading State</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 16 }}>
                <Button loading loadingText="Sending...">Send</Button>
                <Button loading>Send</Button>
            </div>
            <CodeBlock>{`<Button loading loadingText="Sending...">Send</Button>
<Button loading>Send</Button>
`}</CodeBlock>

            <h2>Custom Colors</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 16 }}>
                <Button
                    backgroundColor="#3498db"
                    hoverBackgroundColor="#2980b9"
                    activeBackgroundColor="#1c6ca1"
                    textColor="#ffffff"
                    borderColor="#2980b9"
                >
                    Blue Button
                </Button>
                <Button
                    variant="outline"
                    textColor="#9b59b6"
                    borderColor="#9b59b6"
                    hoverBackgroundColor="rgba(155, 89, 182, 0.1)"
                >
                    Purple Option
                </Button>
            </div>
            <CodeBlock>{`<Button 
  backgroundColor="#3498db"
  hoverBackgroundColor="#2980b9"
  activeBackgroundColor="#1c6ca1"
  textColor="#ffffff"
  borderColor="#2980b9"
>
  Blue Button
</Button>

<Button 
  variant="outline"
  textColor="#9b59b6"
  borderColor="#9b59b6"
  hoverBackgroundColor="rgba(155, 89, 182, 0.1)"
>
  Purple Option
</Button>
`}</CodeBlock>

            <h2>Full Width & Disabled</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 16, width: '100%' }}>
                <Button fullWidth>Full Width Button</Button>
                <Button disabled>Disabled Button</Button>
            </div>
            <CodeBlock>{`<Button fullWidth>Full Width Button</Button>
<Button disabled>Disabled Button</Button>
`}</CodeBlock>

            <h2>Accessibility</h2>
            <Button
                ariaLabel="Button to submit form"
                title="Click to submit the form"
            >
                Submit
            </Button>
            <CodeBlock>{`<Button 
  ariaLabel="Button to submit form"
  title="Click to submit the form"
>
  Submit
</Button>
`}</CodeBlock>

            <h2>Expansion Behavior</h2>
            <p>
                When a button has an icon, it can expand on hover to show the text. This is ideal for toolbars or compact menus.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: 16 }}>
                <Button icon={<Heart />}>Favorite</Button>
                <Button icon={<Send />}>Send</Button>
                <Button icon={<Settings />}>Settings</Button>
                <Button icon={<User />}>Profile</Button>
            </div>
            <CodeBlock>{`import { Heart, Send, Settings, User } from 'lucide-react';

<div style={{ display: 'flex', gap: '8px' }}>
  <Button icon={<Heart />}>Favorite</Button>
  <Button icon={<Send />}>Send</Button>
  <Button icon={<Settings />}>Settings</Button>
  <Button icon={<User />}>Profile</Button>
</div>
`}</CodeBlock>

            <h2>Usage with Icon Libraries</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 16 }}>
                <Button icon={<Download />}>Download</Button>
            </div>
            <CodeBlock>{`import { Download } from 'lucide-react';

<Button icon={<Download />}>Download</Button>
`}</CodeBlock>
            <CodeBlock>{`import { FiDownload } from 'react-icons/fi';

<Button icon={<FiDownload />}>Download</Button>
`}</CodeBlock>
            <CodeBlock>{`import DownloadIcon from '@mui/icons-material/Download';

<Button icon={<DownloadIcon />}>Download</Button>
`}</CodeBlock>
        </Section>
    );
}