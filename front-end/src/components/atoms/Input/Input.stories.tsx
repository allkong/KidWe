import {useState, useRef} from '@storybook/preview-api';
import type {Meta, StoryObj} from '@storybook/react';
import Input from '@/components/atoms/Input/Input';

const meta: Meta<typeof Input> = {
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

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
        <Input value={text} onChange={handleText} />
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
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
      window.alert(inputRef.current?.value);
    };

    return (
      <div>
        <Input ref={inputRef} />
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
