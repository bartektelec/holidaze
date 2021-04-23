import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from '../components/common/Button';
import FilterIcon  from '../components/icons/Filter';

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
const PaginationTemplate: Story = (args) => <Button {...args} >19</Button>;
const WithIconTemplate: Story = (args) => <Button {...args} ><FilterIcon width={16} height={16} fill={args.disabled? '#EDF2F7' : '#4A5568'}/>Filter</Button>;

export const Default = Template.bind({});
Default.args = {
  secondary: false,
  lg: false,
  disabled: false
};
export const Pagination = PaginationTemplate.bind({});
Pagination.args = {
  secondary: false,
  lg: false,
  disabled: false,
  circle: true
};
export const FilterPill = WithIconTemplate.bind({});
FilterPill.args = {
  secondary: true,
  sm: true,
  lg: false,
  disabled: false
};