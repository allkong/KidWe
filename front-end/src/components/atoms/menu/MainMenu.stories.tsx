import type {StoryObj, Meta} from '@storybook/react';
import MainMenu from './MainMenu';

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
