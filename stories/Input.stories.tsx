import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input from '../components/atoms/Input';
import PinIcon from '../components/icons/Pin';

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		label: {
			control: {
				type: 'text',
			},
		},
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

const Template: Story = (args) => <Input id="test" {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Label text',
	placeholder: 'First name',
	defaultValue: 'John Doe',
	lg: false,
	disabled: false,
};
export const WithIcon = Template.bind({});
WithIcon.args = {
	label: 'Label text',
	IconComponent: PinIcon,
	placeholder: 'First name',
	defaultValue: 'John Doe',
	lg: false,
	disabled: false,
};
