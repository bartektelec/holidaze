import React from 'react';
import { Story, Meta } from '@storybook/react';

import Navigation from '../components/molecules/Navigation';

export default {
	title: 'Navigation',
	component: Navigation,
	argTypes: {
		dark: {
			control: {
				type: 'boolean',
			},
		},
	},
} as Meta;

const Template: Story = (args) => (
	<div className="bg-gray-400 min-h-screen">
		<Navigation {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	dark: false,
};
