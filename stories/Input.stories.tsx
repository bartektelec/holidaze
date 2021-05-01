import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input from '../components/atoms/Input';
import PinIcon from '../components/icons/Pin';

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		lg: {
			control: {
				type: 'boolean',
			},
		},
		disabled: {
			control: {
				type: 'boolean',
			},
		},
	},
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	placeholder: 'First name',
	defaultValue: 'John Doe',
	lg: false,
	disabled: false,
};
export const WithIcon = Template.bind({});
WithIcon.args = {
	IconComponent: PinIcon,
	placeholder: 'First name',
	defaultValue: 'John Doe',
	lg: false,
	disabled: false,
};
