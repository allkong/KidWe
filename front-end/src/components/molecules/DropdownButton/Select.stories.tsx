import type {Meta, StoryObj} from '@storybook/react';
import Select from '@/components/molecules/DropdownButton/Select';
import {useState} from 'storybook/internal/preview-api';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: function () {
    const [selected, setSelected] = useState<string | undefined>(undefined);

    const handleChange = (value: string) => {
      setSelected(value);
    };

    return (
      <>
        <Select size="medium" onChange={handleChange}>
          <Select.Option text="option1" id="1" />
          <Select.Option text="option2" />
          <Select.Option text="option3" />
        </Select>
        <p>{selected !== undefined ? selected : '선택 안됨'}</p>
      </>
    );
  },
};
