import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import DropDownDivider from '@/components/atoms/DropDown/DropDownDivider';
import DropDownMain from '@/components/atoms/DropDown/DropDownMain';
import DropDownOption from '@/components/atoms/DropDown/DropDownOption';

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
