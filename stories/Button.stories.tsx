import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from '../components/common/Button';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    secondary: {
      control: {
        type: 'boolean',
      }
    },
    lg: {
      control: {
        type: 'boolean',
      }
    },
    disabled: {
      control: {
        type: 'boolean',
      }
    }
  },
} as Meta;

const Template: Story = (args) => <Button {...args} >Register</Button>;

export const Default = Template.bind({});
Default.args = {
  secondary: false,
  lg: false,
  disabled: false
};