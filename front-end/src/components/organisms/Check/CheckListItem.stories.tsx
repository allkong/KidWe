import type {Meta, StoryObj} from '@storybook/react';
import CheckListItem from '@/components/organisms/Check/CheckListItem';
import Hotdog from '@/assets/icons/hot-dog.svg';
import {useRef, useState} from 'storybook/internal/preview-api';

const meta: Meta<typeof CheckListItem> = {
  component: CheckListItem,
};

export default meta;

type Story = StoryObj<typeof CheckListItem>;

export const Default: Story = {
  render: function () {
    const itemRef = useRef<HTMLInputElement | null>(null);
    return (
      <>
        <CheckListItem src={Hotdog} ref={itemRef}></CheckListItem>
        <button onClick={() => window.alert(itemRef.current?.checked)}>
          +
        </button>
      </>
    );
  },
};

export const State: Story = {
  render: function () {
    const [checked, setChecked] = useState(false);
    return (
      <>
        <CheckListItem isChecked={checked} onClick={setChecked}></CheckListItem>
        <button onClick={() => window.alert(checked)}>+</button>
      </>
    );
  },
};
