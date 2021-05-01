import React from 'react';
import { Story, Meta } from '@storybook/react';

import Card from '../components/molecules/Card';

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

const mockHotel = {
	id: 1,
	name: 'Cozy House in Oslo',
	description:
		'This cozy house is very cozy and is located in Oslo downtown. It is best suited for people who like plants and soft blankets. Grab a book and chill out in the sofa, or go out and see the beatiful Oslo Sentrum. It is located close to a grocery store and a bus stop.',
	type: 'home',
	rating: 4.5,
	price: 499,
	address: 'Storgata 61, 0182 Oslo',
	beds: 3,
	bedrooms: 1,
	bathrooms: 1,
	adults: 3,
	children: 1,
	featured: true,
	created_at: '2021-04-21T08:10:02.999Z',
	updated_at: '2021-04-21T09:43:51.656Z',
	images: [
		{
			id: 16,
			name: 'patrick-perkins-iRiVzALa4pI-unsplash.jpg',
			alternativeText: '',
			caption: '',
			width: 3000,
			height: 2278,
			formats: {
				thumbnail: {
					name: 'thumbnail_patrick-perkins-iRiVzALa4pI-unsplash.jpg',
					hash:
						'thumbnail_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b',
					ext: '.jpg',
					mime: 'image/jpeg',
					width: 205,
					height: 156,
					size: 8.95,
					path: null,
					url:
						'https://res.cloudinary.com/dqbdqv68i/image/upload/v1618998186/thumbnail_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b.jpg',
					provider_metadata: {
						public_id:
							'thumbnail_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b',
						resource_type: 'image',
					},
				},
				large: {
					name: 'large_patrick-perkins-iRiVzALa4pI-unsplash.jpg',
					hash: 'large_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b',
					ext: '.jpg',
					mime: 'image/jpeg',
					width: 1000,
					height: 759,
					size: 118.21,
					path: null,
					url:
						'https://res.cloudinary.com/dqbdqv68i/image/upload/v1618998187/large_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b.jpg',
					provider_metadata: {
						public_id:
							'large_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b',
						resource_type: 'image',
					},
				},
				medium: {
					name: 'medium_patrick-perkins-iRiVzALa4pI-unsplash.jpg',
					hash: 'medium_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b',
					ext: '.jpg',
					mime: 'image/jpeg',
					width: 750,
					height: 570,
					size: 73.23,
					path: null,
					url:
						'https://res.cloudinary.com/dqbdqv68i/image/upload/v1618998188/medium_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b.jpg',
					provider_metadata: {
						public_id:
							'medium_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b',
						resource_type: 'image',
					},
				},
				small: {
					name: 'small_patrick-perkins-iRiVzALa4pI-unsplash.jpg',
					hash: 'small_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b',
					ext: '.jpg',
					mime: 'image/jpeg',
					width: 500,
					height: 380,
					size: 38.32,
					path: null,
					url:
						'https://res.cloudinary.com/dqbdqv68i/image/upload/v1618998189/small_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b.jpg',
					provider_metadata: {
						public_id:
							'small_patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b',
						resource_type: 'image',
					},
				},
			},
			hash: 'patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b',
			ext: '.jpg',
			mime: 'image/jpeg',
			size: 784.49,
			url:
				'https://res.cloudinary.com/dqbdqv68i/image/upload/v1618998186/patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b.jpg',
			previewUrl: null,
			provider: 'cloudinary',
			provider_metadata: {
				public_id: 'patrick_perkins_i_Ri_Vz_A_La4p_I_unsplash_307e255a2b',
				resource_type: 'image',
			},
			created_at: '2021-04-21T09:43:09.416Z',
			updated_at: '2021-04-21T09:43:09.427Z',
		},
		{
			id: 19,
			name: 'patrick-perkins-3wylDrjxH-E-unsplash.jpg',
			alternativeText: '',
			caption: '',
			width: 3000,
			height: 2232,
			formats: {
				thumbnail: {
					name: 'thumbnail_patrick-perkins-3wylDrjxH-E-unsplash.jpg',
					hash: 'thumbnail_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429',
					ext: '.jpg',
					mime: 'image/jpeg',
					width: 210,
					height: 156,
					size: 9.35,
					path: null,
					url:
						'https://res.cloudinary.com/dqbdqv68i/image/upload/v1618998186/thumbnail_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429.jpg',
					provider_metadata: {
						public_id:
							'thumbnail_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429',
						resource_type: 'image',
					},
				},
				large: {
					name: 'large_patrick-perkins-3wylDrjxH-E-unsplash.jpg',
					hash: 'large_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429',
					ext: '.jpg',
					mime: 'image/jpeg',
					width: 1000,
					height: 744,
					size: 111.16,
					path: null,
					url:
						'https://res.cloudinary.com/dqbdqv68i/image/upload/v1618998187/large_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429.jpg',
					provider_metadata: {
						public_id:
							'large_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429',
						resource_type: 'image',
					},
				},
				medium: {
					name: 'medium_patrick-perkins-3wylDrjxH-E-unsplash.jpg',
					hash: 'medium_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429',
					ext: '.jpg',
					mime: 'image/jpeg',
					width: 750,
					height: 558,
					size: 68.81,
					path: null,
					url:
						'https://res.cloudinary.com/dqbdqv68i/image/upload/v1618998189/medium_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429.jpg',
					provider_metadata: {
						public_id:
							'medium_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429',
						resource_type: 'image',
					},
				},
				small: {
					name: 'small_patrick-perkins-3wylDrjxH-E-unsplash.jpg',
					hash: 'small_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429',
					ext: '.jpg',
					mime: 'image/jpeg',
					width: 500,
					height: 372,
					size: 36.74,
					path: null,
					url:
						'https://res.cloudinary.com/dqbdqv68i/image/upload/v1618998190/small_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429.jpg',
					provider_metadata: {
						public_id:
							'small_patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429',
						resource_type: 'image',
					},
				},
			},
			hash: 'patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429',
			ext: '.jpg',
			mime: 'image/jpeg',
			size: 722.31,
			url:
				'https://res.cloudinary.com/dqbdqv68i/image/upload/v1618998185/patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429.jpg',
			previewUrl: null,
			provider: 'cloudinary',
			provider_metadata: {
				public_id: 'patrick_perkins_3wyl_Drjx_H_E_unsplash_aac29f1429',
				resource_type: 'image',
			},
			created_at: '2021-04-21T09:43:10.611Z',
			updated_at: '2021-04-21T09:43:10.622Z',
		},
	],
	bookings: [],
};

const Template: Story = (args) => (
	<div className="min-h-screen">
		<Card hotel={mockHotel} {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	editable: false,
};
