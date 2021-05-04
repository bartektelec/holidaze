import React from 'react';
import { Story, Meta } from '@storybook/react';

import Searchbar from '../components/organisms/Searchbar';

export default {
	title: 'Searchbar',
	component: Searchbar,
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
		<Searchbar {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	editable: false,
};
