// import dayjs from 'dayjs';
// import {useState} from 'react';
import CustomTimePicker from '@/components/molecules/InputForm/CustomTimePicker';
import Divider from '@/components/atoms/Divider/Divider';
import {memoState} from '@/recoil/atoms/memo/memo';
import {useRecoilState} from 'recoil';

const MemoTimeSelect = () => {
  const [time, changeTime] = useRecoilState(memoState);

  const handleChange = (value: string) => {
    changeTime({...time, updatedTime: value});
  };

  return (
    <div>
      <div className="flex items-center justify-between text-gray-300">
        <p className="mb-1 text-2xl font-semibold cursor-default">시간 선택</p>
        <CustomTimePicker value={time.updatedTime} onChange={handleChange} />
      </div>
      <Divider />
    </div>
  );
};

export default MemoTimeSelect;
