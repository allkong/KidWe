import type {Meta, StoryObj} from '@storybook/react';
import CalendarButton from '@/components/molecules/Button/CalendarButton';
import MoreButton from '@/components/molecules/DropdownButton/MoreButton';
import {useState} from 'storybook/internal/preview-api';
import dayjs, {Dayjs} from 'dayjs';

const meta: Meta<typeof CalendarButton> = {
  component: CalendarButton,
};

export default meta;

type Story = StoryObj<typeof CalendarButton>;

export const Button: Story = {
  render: function () {
    const [date, setDate] = useState(dayjs());

    const handleClick = (value: Dayjs) => {
      setDate(value);
    };

    return (
      <div className="flex flex-col items-center justify-center w-full h-96">
        <CalendarButton render={() => <MoreButton />} onClick={handleClick} />
        <p>{date.format('YYYY-MM-DD')}</p>
      </div>
    );
  },
};

export const Text: Story = {
  render: function () {
    const [date, setDate] = useState(dayjs());

    const handleClick = (value: Dayjs) => {
      setDate(value);
    };

    return (
      <div className="flex flex-col items-center justify-center w-full h-96">
        <CalendarButton
          render={() => <p>현재시간 : {date.format('YYYY-MM-DD')}</p>}
          onClick={handleClick}
          defaultDate={date}
        />
        <p>{date.format('YYYY-MM-DD')}</p>
      </div>
    );
  },
};
