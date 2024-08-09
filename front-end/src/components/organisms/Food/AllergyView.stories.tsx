import type {Meta, StoryObj} from '@storybook/react';
import AllergyView from '@/components/organisms/Food/AllergyView';
import Modal from '@/components/organisms/Modal/Modal';
import {useState} from 'storybook/internal/preview-api';
import CheckBoxButton from '@/components/atoms/CheckBox/CheckBoxButton';

const meta: Meta<typeof AllergyView> = {
  component: AllergyView,
};

export default meta;

type Story = StoryObj<typeof AllergyView>;

export const None: Story = {
  args: {},
};
