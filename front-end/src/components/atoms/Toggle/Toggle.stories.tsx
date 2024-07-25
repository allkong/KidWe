import React from 'react';
import {useState} from '@storybook/preview-api';
import type {Meta, StoryObj} from '@storybook/react';
import Toggle from '@/components/atoms/Toggle/Toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: function () {
    const [checked, setChecked] = useState(false);

    const handleCheck = (value: boolean) => {
      setChecked(value);
    };

    return <Toggle checked={checked} onChange={handleCheck} />;
  },
};

export const Page: Story = {
  render: function () {
    const [checked, setChecked] = useState(false);

    const handleCheck = (checked: boolean) => {
      setChecked(checked);
    };

    return (
      <div className="flex items-center justify-center w-40 h-40 bg-pink-500">
        <Toggle checked={checked} onChange={handleCheck} />
      </div>
    );
  },
};
