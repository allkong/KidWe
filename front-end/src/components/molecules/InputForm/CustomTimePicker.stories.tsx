import type {Meta, StoryObj} from '@storybook/react';
import CustomTimePicker from '@/components/molecules/InputForm/CustomTimePicker';
import {useState} from 'storybook/internal/preview-api';

const meta: Meta<typeof CustomTimePicker> = {
  component: CustomTimePicker,
};
export default meta;

type Story = StoryObj<typeof CustomTimePicker>;

export const Default: Story = {
  render: function () {
    const [value, onChange] = useState('11:00');
    const handleChange = (value: string) => {
      onChange(value);
    };
    return (
      <>
        <CustomTimePicker value={value} onChange={handleChange} />
        <p>{value.toString()}</p>
      </>
    );
  },
};
