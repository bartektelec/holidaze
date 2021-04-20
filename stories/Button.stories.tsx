import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from '../components/common/Button';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <Button {...args} >Sample text</Button>;

export const Default = Template.bind({});
Default.args = {
};
export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true
};
