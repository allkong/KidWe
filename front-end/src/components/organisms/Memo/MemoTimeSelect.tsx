// import dayjs from 'dayjs';
// import {useState} from 'react';
import CustomTimePicker from '@/components/molecules/InputForm/CustomTimePicker';
import Divider from '@/components/atoms/Divider/Divider';
import {memoState} from '@/recoil/atoms/memo/memo';
import {useRecoilState} from 'recoil';

const MemoTimeSelect = () => {
  const [memo, setMemo] = useRecoilState(memoState);

  const handleTimeChange = (value: string) => {
    const [hour, minute] = value.split(':').map(Number);

    const hourSet = memo.updatedTime.hour(hour);
    const minuteSet = hourSet.minute(minute);
    console.log(minuteSet.format('HH:mm'));

    setMemo({...memo, updatedTime: minuteSet});
  };
  return (
    <div>
      <div className="flex items-center justify-between text-gray-300">
        <p className="mb-1 text-2xl font-semibold cursor-default">시간 선택</p>
        <CustomTimePicker
          value={memo.updatedTime.format('HH:mm')}
          onChange={handleTimeChange}
        />
      </div>
      <Divider />
    </div>
  );
};

export default MemoTimeSelect;
