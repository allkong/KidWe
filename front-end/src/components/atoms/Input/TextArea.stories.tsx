import React from 'react';
import {useState} from '@storybook/preview-api';
import type {Meta, StoryObj} from '@storybook/react';
import TextArea from '@/components/atoms/Input/TextArea';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    value: 'textarea',
    onChange: () => window.alert(),
    placeholder: 'placeholder test',
  },
};

export const State: Story = {
  render: function () {
    const [text, setText] = useState('');

    const handleText = (value: string) => {
      setText(value);
    };

    return (
      <>
        <TextArea value={text} onChange={handleText} />
        <p>{text}</p>
      </>
    );
  },
};
