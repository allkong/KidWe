import type {Meta, StoryObj} from '@storybook/react';
import MedicationDetailItem from '@/components/molecules/Item/MedicationDetailItem';

const meta: Meta<typeof MedicationDetailItem> = {
  component: MedicationDetailItem,
};

export default meta;

type Story = StoryObj<typeof MedicationDetailItem>;

export const Default: Story = {
  args: {
    title: '증상',
    content: '감기, 발열',
    color: '#FFC36A',
  },
};
