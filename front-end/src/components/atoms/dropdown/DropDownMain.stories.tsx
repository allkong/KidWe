import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import DropDownMain from './DropDownMain';
import DropDownOption from './DropDownOption';
import DropDownDivider from './DropDownDivider';

const meta: Meta<typeof DropDownMain> = {
  component: DropDownMain,
};

export default meta;

type Story = StoryObj<typeof DropDownMain>;

export const Default: Story = {
  args: {
    children: [
      <DropDownOption text="test1" />,
      <DropDownDivider />,
      <DropDownOption text="test2" />,
      <DropDownOption text="test3" />,
    ],
  },
};
