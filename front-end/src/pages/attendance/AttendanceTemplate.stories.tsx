import type {Meta, StoryObj} from '@storybook/react';
import AttendanceTemplate from '@/pages/attendance/AttendanceTemplate';

const meta: Meta<typeof AttendanceTemplate> = {
  component: AttendanceTemplate,
};

export default meta;

type Story = StoryObj<typeof AttendanceTemplate>;
export const Default: Story = {};
