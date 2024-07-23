import React, {ChangeEvent} from 'react';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';

interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'value' | 'onClick'> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface InputFormProps extends InputProps, ButtonProps {}

const InputForm = ({
  value,
  label,
  setValue,
  onClick,
  ...props
}: InputFormProps) => {
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="box-border flex items-center justify-center w-full gap-2">
      <div className="flex-grow">
        <Input value={value} onChange={handleValue} {...props} />
      </div>
      <div className="flex-shrink-0">
        <Button label={label} onClick={onClick} />
      </div>
    </div>
  );
};

export default InputForm;
