import LabelInput from '@/components/atoms/Input/LabelInput';
import CalendarButton from '@/components/molecules/Button/CalendarButton';
import {kidInfoBirthday} from '@/recoil/selectors/my-page/kidInfoBirthday';
import dayjs, {Dayjs} from 'dayjs';
import {useRecoilState} from 'recoil';

const KidBirthdayUpdateView = () => {
  const [kidBirthday, setKidBirthday] = useRecoilState(kidInfoBirthday);

  const handleDateChange = (value: Dayjs) => {
    setKidBirthday(value.format('YYYY-MM-DD'));
  };

  return (
    <CalendarButton
      defaultDate={dayjs(kidBirthday)}
      onClick={handleDateChange}
      position="right"
      render={() => (
        <LabelInput value={kidBirthday} label="생년월일" readOnly />
      )}
    />
  );
};

export default KidBirthdayUpdateView;
