import type {Meta, StoryObj} from '@storybook/react';
import InputForm from '@/components/molecules/InputForm/InputForm';
import {useRef, useState} from 'storybook/internal/preview-api';

const meta: Meta<typeof InputForm> = {
  component: InputForm,
};
export default meta;

type Story = StoryObj<typeof InputForm>;

export const Default: Story = {
  render: function () {
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
      <InputForm
        buttonLabel="버튼"
        onClick={() => window.alert(inputRef.current?.value)}
        ref={inputRef}
      />
    );
  },
};

export const State: Story = {
  render: function () {
    const [value, setValue] = useState('');

    return (
      <InputForm
        buttonLabel="버튼"
        inputValue={value}
        setValue={value => setValue(value)}
        onClick={() => window.alert(value)}
      />
    );
  },
};
