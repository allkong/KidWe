import type {Meta, StoryObj} from '@storybook/react';
import MainMenu from '@/components/atoms/Menu/MainMenu';

const meta: Meta<typeof MainMenu> = {
  component: MainMenu,
};

export default meta;

type Story = StoryObj<typeof MainMenu>;

export const RiceBowl: Story = {
  args: {
    img: 'riceBowl',
    text: '식단',
  },
};

export const SketchBook: Story = {
  args: {
    img: 'sketchBook',
    text: '알림장',
  },
};
