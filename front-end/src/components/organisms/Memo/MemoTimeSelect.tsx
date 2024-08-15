import dayjs, {Dayjs} from 'dayjs';
import CustomTimePicker from '@/components/molecules/InputForm/CustomTimePicker';
import Divider from '@/components/atoms/Divider/Divider';
import {useRecoilState} from 'recoil';
import {memoTimeSelector} from '@/recoil/selectors/memo/memoTime';

const MemoTimeSelect = () => {
  const [memoTime, setMemoTime] = useRecoilState<Dayjs>(memoTimeSelector);

  const handleTimeChange = (value: string) => {
    const [hour, minute] = value.split(':').map(Number);
    const hourSet = memoTime.hour(hour);
    const minuteSet = hourSet.minute(minute);

    setMemoTime(minuteSet);
  };
  return (
    <div>
      <div className="flex items-center justify-between text-gray-300">
        <p className="mb-1 text-2xl font-semibold cursor-default">시간 선택</p>
        <div className="flex items-center">
          <p>{dayjs(memoTime).format('M월 D일')}</p>
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
