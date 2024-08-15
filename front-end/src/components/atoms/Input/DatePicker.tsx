interface DatePickerProps {
  label?: string;
  selectedDate: string;
  minDate: string;
  onDateChange: (date: string) => void;
}

const DatePicker = ({
  label,
  selectedDate,
  minDate,
  onDateChange,
}: DatePickerProps) => {
  return (
    <div>
      <label className="mb-1 text-sm font-medium" htmlFor="date">
        {label}
      </label>
      <input
        type="date"
        id="date"
        className="w-full p-2 border border-gray-200 rounded-md text-inherit"
        value={selectedDate}
        min={minDate}
        onChange={e => onDateChange(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
