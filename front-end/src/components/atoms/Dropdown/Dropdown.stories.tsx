import type {Meta, StoryObj} from '@storybook/react';
import Dropdown from '@/components/atoms/Dropdown/Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
  render: function () {
    return (
      <Dropdown isOpen={true}>
        <Dropdown.Option text={'option1'}></Dropdown.Option>
        <Dropdown.Divider></Dropdown.Divider>
        <Dropdown.Option text={'option2'}></Dropdown.Option>
        <Dropdown.Option text={'option3'}></Dropdown.Option>
      </Dropdown>
    );
  },
};
