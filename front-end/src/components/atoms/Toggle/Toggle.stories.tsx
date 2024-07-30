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
    return (
      <div>
        <Toggle />
      </div>
    );
  },
};

export const State: Story = {
  render: function () {
    const [checked, setChecked] = useState(false);

    const handleCheck = (checked: boolean) => {
      setChecked(checked);
    };

    return (
      <div>
        <Toggle checked={checked} onChange={handleCheck} />
        <div>{checked ? 'true' : 'false'}</div>
      </div>
    );
  },
};
