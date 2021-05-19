import * as React from 'react';
import Button from '../components/atoms/Button';
import Filter from '../components/icons/Filter';
import Sort from '../components/icons/Sort';
import Footer from '../components/molecules/Footer';
import Navigation from '../components/molecules/Navigation';
import Searchbar from '../components/organisms/Searchbar';
import Card from '../components/molecules/Card';
import request from '../services/api';

export interface SearchProps {
	hotels: IResponseHotel[];
}

const Search: React.FC<SearchProps> = ({ hotels }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<header>
				<Navigation dark />
			</header>
			<Searchbar />
			<nav className="container mx-auto px-4 flex flex-col gap-4">
				<h1 className="mt-14">
					Found <span className="font-bold">{hotels.length} places</span>{' '}
					matching the criteria{' '}
				</h1>
				<div className="flex items-center gap-4">
					<Button sm secondary>
						<Filter width={16} height={16} /> Filter
					</Button>
					<Button sm secondary>
						<Sort width={16} height={16} /> Sort
					</Button>
				</div>
			</nav>
			<main className="container mx-auto flex-1 flex flex-col">
				<div className="flex-1">
					<div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 grid-rows-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-start gap-8 py-8">
						{hotels.map((hotel) => {
							return <Card key={hotel.id} hotel={hotel} />;
						})}
					</div>
				</div>
				<div className="text-center">
					Showing 1-{hotels.length} results of total {hotels.length}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export async function getServerSideProps(context: {
	query: Record<'location' | 'guests' | 'date' | 'type', string>;
}) {
	const { location, guests, date, type } = context.query;
	try {
		const query = new URLSearchParams();
		if (location) query.set('address_contains', location);
		if (guests) query.set('adults_gte', guests);
		if (type) query.set('type', type);
		const response = await request('hotels?' + query.toString());
		const hotels: IResponseHotel[] = await response.data;
		const filtered = hotels.filter((x) => {
			if (!date) return true;
			return x.bookings.every(
				(booking) =>
					new Date(date) < new Date(booking.arrival) ||
					new Date(date) > new Date(booking.departure)
			);
		});

		return {
			props: {
				hotels: filtered,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
}

export default Search;
