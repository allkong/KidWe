import TimePicker from 'react-time-picker';
import '@/components/molecules/InputForm/customTimePicker.css';
import {Value} from 'react-time-picker/dist/cjs/shared/types';

interface CustomTimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
}

const CustomTimePicker = ({value, onChange}: CustomTimePickerProps) => {
  const handleChange = (value: Value) => {
    onChange?.(value!.toString());
  };

  return (
    <TimePicker
      value={value}
      onChange={handleChange}
      disableClock={true}
      clearIcon={null}
    />
  );
};

export default CustomTimePicker;
