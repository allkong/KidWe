// import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import CheckBoxButton from '@/components/atoms/CheckBox/CheckBoxButton';
import {useRef, useState} from 'storybook/internal/preview-api';

const meta: Meta<typeof CheckBoxButton> = {
  component: CheckBoxButton,
};
export default meta;

type Story = StoryObj<typeof CheckBoxButton>;

export const Default: Story = {
  args: {},
  render: function () {
    const checkBoxRef = useRef<HTMLInputElement | null>(null);
    return (
      <>
        <CheckBoxButton ref={checkBoxRef} label="토마토"></CheckBoxButton>
      </>
    );
  },
};

export const State: Story = {
  render: function () {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckBoxChange = () => {
      setIsChecked(!isChecked);
    };
    return (
      <>
        <CheckBoxButton
          isChecked={isChecked}
          onClick={handleCheckBoxChange}
          label="토마토"
        ></CheckBoxButton>
      </>
    );
  },
};
