import type {Meta, StoryObj} from '@storybook/react';
import CustomCalendar from '@/components/molecules/Calendar/CustomCalendar';
import {useState} from 'storybook/internal/preview-api';
import dayjs from 'dayjs';

const meta: Meta<typeof CustomCalendar> = {
  component: CustomCalendar,
};

export default meta;

type Story = StoryObj<typeof CustomCalendar>;
export const Default: Story = {
  args: {},
};

export const Controlled: Story = {
  render: function () {
    const [date, onChange] = useState(dayjs().toDate());
    return (
      <>
        <CustomCalendar defaultDate={date} onChange={onChange}></CustomCalendar>
        <p>{dayjs(date).format('YYYY-MM-DD')}</p>
      </>
    );
  },
};
