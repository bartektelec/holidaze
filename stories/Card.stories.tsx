import React from 'react';
import { Story, Meta } from '@storybook/react';

import Card from '../components/molecules/Card';
import hotels from './mocks/hotellist';

export default {
	title: 'Card',
	component: Card,
	argTypes: {
		editable: {
			control: {
				type: 'boolean',
			},
		},
	},
} as Meta;

const Template: Story = (args) => (
	<div className="min-h-screen">
		<Card hotel={hotels[0]} {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	editable: false,
};
