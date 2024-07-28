import {Meta, StoryObj} from '@storybook/react/*';
import DashedRoundedButton from '@/components/atoms/Button/DashedRoundedButton';

const meta: Meta<typeof DashedRoundedButton> = {
  component: DashedRoundedButton,
};

export default meta;

type Story = StoryObj<typeof DashedRoundedButton>;

export const Default: Story = {};

export const Big: Story = {
  args: {
    size: '5rem',
  },
};

export const EventListener: Story = {
  render: function () {
    const handleButtonClick = () => {
      window.alert('alert!');
    };

    return (
      <DashedRoundedButton onClick={handleButtonClick}></DashedRoundedButton>
    );
  },
};
