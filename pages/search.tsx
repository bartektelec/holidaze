import * as React from 'react';
import Button from '../components/atoms/Button';
import Filter from '../components/icons/Filter';
import Sort from '../components/icons/Sort';
import Footer from '../components/molecules/Footer';
import Navigation from '../components/molecules/Navigation';
import Searchbar from '../components/organisms/Searchbar';
import Card from '../components/molecules/Card';

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
	query: Record<'location' | 'guests' | 'date', string>;
}) {
	const { location, guests, date } = context.query;
	try {
		const response = await fetch('https://holidaze-bt.herokuapp.com/hotels/');
		const hotels: IResponseHotel[] = await response.json();
		const guestFiltered = hotels.filter((x) => {
			if (!guests) return true;
			return x.adults >= Number(guests);
		});
		const bookingsFiltered = guestFiltered.filter((x) => {
			if (!date) return true;
			return x.bookings.every(
				(booking) =>
					new Date(date) < new Date(booking.arrival) ||
					new Date(date) > new Date(booking.departure)
			);
		});

		const locationFiltered = bookingsFiltered.filter((x) => {
			if (!location) return true;
			return x.address.match(new RegExp(location, 'gi'));
		});
		return {
			props: {
				hotels: locationFiltered,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
}

export default Search;
