import {useState, useRef} from '@storybook/preview-api';
import type {Meta, StoryObj} from '@storybook/react';
import TextArea from '@/components/atoms/Input/TextArea';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Controlled: Story = {
  args: {},
  render: function () {
    const [text, setText] = useState('');

    const handleText = (value: string) => {
      setText(value);
    };

    const handleClick = () => {
      window.alert(text);
    };

    return (
      <div>
        <TextArea value={text} onChange={handleText} />
        <button onClick={handleClick}>[click me]</button>
        <div>
          <h1>Re-Rendering Test</h1>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
      </div>
    );
  },
};

export const Uncontrolled: Story = {
  args: {},
  render: function () {
    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    const handleClick = () => {
      window.alert(inputRef.current?.value);
    };

    return (
      <div>
        <TextArea ref={inputRef} />
        <button onClick={handleClick}>[click me]</button>
        <div>
          <h1>Re-Rendering Test</h1>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
      </div>
    );
  },
};
