import type {Meta, StoryObj} from '@storybook/react';
import SelectMain from '@/components/molecules/DropdownButton/SelectMain';
import {useState} from 'storybook/internal/preview-api';
import Option from '@/components/atoms/Option/Option';

const meta: Meta<typeof SelectMain> = {
  component: SelectMain,
};

export default meta;

type Story = StoryObj<typeof SelectMain>;

export const Default: Story = {
  args: {
    label: '옵션',
  },
};

export const Render: Story = {
  render: function () {
    const [selected, setSelected] = useState('');
    const handleChange = (value: string) => {
      setSelected(value);
    };
    return (
      <>
        <div className="flex items-center justify-center h-40 bg-white w-72">
          <SelectMain size="medium" label="옵션" onChange={handleChange}>
            <Option text="option 1" id="o1" />
            <Option text="option 2" />
            <Option text="option 3" id="o3" />
            <Option text="option 4" />
          </SelectMain>
        </div>
        <p>{selected === '' ? '선택 안함' : selected}</p>
      </>
    );
  },
};
