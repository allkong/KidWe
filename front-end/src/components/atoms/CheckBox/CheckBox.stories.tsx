import type {Meta, StoryObj} from '@storybook/react';
import CheckBox from '@/components/atoms/CheckBox/CheckBox';
import {useRef, useState} from 'storybook/internal/preview-api';

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
};
export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {},
  render: function () {
    const checkBoxRef = useRef<HTMLInputElement | null>(null);
    return (
      <>
        <CheckBox ref={checkBoxRef}></CheckBox>
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
        <CheckBox
          isChecked={isChecked}
          onClick={handleCheckBoxChange}
        ></CheckBox>
      </>
    );
  },
};
