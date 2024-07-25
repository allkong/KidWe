import React from 'react';
import {useState} from '@storybook/preview-api';
import type {Meta, StoryObj} from '@storybook/react';
import Input from '@/components/atoms/Input/Input';

const meta: Meta<typeof Input> = {
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: 'input',
    onChange: () => window.alert(),
    placeholder: 'placeholder test',
  },
};

export const State: Story = {
  args: {},
  render: function () {
    const [text, setText] = useState('');

    const handleText = (value: string) => {
      setText(value);
    };

    return <Input value={text} onChange={handleText} />;
  },
};
