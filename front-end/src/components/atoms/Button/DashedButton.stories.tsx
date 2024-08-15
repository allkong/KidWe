import type {Meta, StoryObj} from '@storybook/react';
import DashedButton from '@/components/atoms/Button/DashedButton';
import medecine from '@/assets/icons/icon-medecines.svg?react';

const meta: Meta<typeof DashedButton> = {
  component: DashedButton,
};

export default meta;

type Story = StoryObj<typeof DashedButton>;
export const Default: Story = {};

export const Click: Story = {
  render: function () {
    const handleClick = () => {
      window.alert('clicked');
    };

    return <DashedButton label="+" onClick={handleClick} />;
  },
};

export const Primary: Story = {
  args: {
    label: '약 추가하기',
    variant: 'positive',
    Icon: medecine,
  },
};
