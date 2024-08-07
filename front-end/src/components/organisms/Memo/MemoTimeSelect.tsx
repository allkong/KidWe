import dayjs from 'dayjs';
// import {useState} from 'react';
import CustomTimePicker from '@/components/molecules/InputForm/CustomTimePicker';
import Divider from '@/components/atoms/Divider/Divider';
import {useRecoilState} from 'recoil';
import {memoTimeSelector} from '@/recoil/selectors/memo/memoTime';

const MemoTimeSelect = () => {
  const [memoTime, setMemoTime] = useRecoilState<string>(memoTimeSelector);

  const handleTimeChange = (value: string) => {
    const [hour, minute] = value.split(':').map(Number);
    const time = dayjs(memoTime);
    const hourSet = time.hour(hour);
    const minuteSet = hourSet.minute(minute);

    setMemoTime(minuteSet.format('YYYY-MM-DD HH:mm'));
  };
  return (
    <div>
      <div className="flex items-center justify-between text-gray-300">
        <p className="mb-1 text-2xl font-semibold cursor-default">시간 선택</p>
        <div className="flex items-center">
          <p className="">{dayjs(memoTime).format('M월 D일')}</p>
          <CustomTimePicker
            value={dayjs(memoTime).format('HH:mm')}
            onChange={handleTimeChange}
          />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default MemoTimeSelect;
