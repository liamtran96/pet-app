import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'ghost'],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'sm', 'lg'],
      control: { type: 'radio' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  children: 'Ghost Button',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  children: 'Loading...',
};
