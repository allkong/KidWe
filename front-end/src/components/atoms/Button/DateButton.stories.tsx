import DateButton from '@/components/atoms/Button/DateButton';
import {Meta, StoryObj} from '@storybook/react/*';

const meta: Meta<typeof DateButton> = {
  component: DateButton,
};

export default meta;

type Story = StoryObj<typeof DateButton>;

export const Default: Story = {
  args: {
    isSelected: true,
  },
};

export const NotDisabled: Story = {
  render: function () {
    const handleClick = () => {
      window.alert('clicked');
    };

    return <DateButton onClick={handleClick}></DateButton>;
  },
};

export const Disabled: Story = {
  render: function () {
    const handleClick = () => {
      window.alert('clicked');
    };

    return <DateButton disabled={true} onClick={handleClick}></DateButton>;
  },
};
