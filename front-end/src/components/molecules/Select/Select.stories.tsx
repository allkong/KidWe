import type {Meta, StoryObj} from '@storybook/react';
import Select from '@/components/molecules/Select/Select';
import {useState} from 'storybook/internal/preview-api';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: '옵션',
    options: ['안녕', '하세', '요'],
  },
};

export const Render: Story = {
  render: function () {
    const [selected, setSelected] = useState('');
    const options = ['1', '2', '3'];
    const handleChange = (value: string) => {
      setSelected(value);
    };
    return (
      <>
        <div className="flex items-center justify-center h-40 bg-white w-72">
          <Select
            size="small"
            label="옵션"
            options={options}
            onChange={handleChange}
          ></Select>
        </div>
        <p>{selected === '' ? '선택 안함' : selected}</p>
      </>
    );
  },
};
