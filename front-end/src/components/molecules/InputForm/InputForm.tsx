import React, {forwardRef} from 'react';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';

interface InputProps
  extends Omit<
    React.ComponentProps<'input'>,
    'value' | 'onClick' | 'onChange'
  > {
  inputValue?: string;
  setValue?: (value: string) => void;
}

interface ButtonProps {
  buttonLabel: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface InputFormProps extends InputProps, ButtonProps {}

const InputForm = forwardRef(
  (
    {
      inputValue: value,
      buttonLabel: label = '',
      setValue,
      onClick = () => {},
      ...props
    }: InputFormProps,
    ref?: React.ForwardedRef<HTMLInputElement>
  ) => {
    const handleValue = (value: string) => {
      setValue?.(value);
    };

    return (
      <div className="box-border flex items-center justify-center w-full gap-2">
        <div className="flex-grow">
          <Input ref={ref} value={value} onChange={handleValue} {...props} />
        </div>
        <div className="flex-shrink-0">
          <Button label={label} onClick={onClick} />
        </div>
      </div>
    );
  }
);

export default InputForm;
