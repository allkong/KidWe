import type {Meta, StoryObj} from '@storybook/react';
import {withRouter} from 'storybook-addon-remix-react-router';
import Header from '@/components/organisms/Navigation/Header';

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof Header>;
export const Default: Story = {};
