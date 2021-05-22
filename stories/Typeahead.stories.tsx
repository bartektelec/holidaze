import React from 'react';
import { Story, Meta } from '@storybook/react';

import Typeahead from '../components/molecules/Typeahead';
import hotellist from './mocks/hotellist';

export default {
	title: 'Typeahead',
	component: Typeahead,
	argTypes: {
		limit: {
			control: {
				type: 'number',
			},
		},
	},
} as Meta;

const Template: Story = (args) => (
	<Typeahead
		selectionLabel={(item: IResponseHotel) => item.name}
		onSelect={(v: IResponseHotel) => console.log(v.id)}
		{...args}
	/>
);

export const Default = Template.bind({});
Default.args = {};
