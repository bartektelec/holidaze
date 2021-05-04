import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Spinner from '../atoms/Spinner';
import Typeahead from '../molecules/Typeahead';
import Pin from '../icons/Pin';
import Person from '../icons/Person';
import Calendar from '../icons/Calendar';

export interface SearchformProps {}

const Searchform: React.FC<SearchformProps> = () => {
	const router = useRouter();
	const [hotels, setHotels] = React.useState<Array<IResponseHotel>>([]);
	const [location, setLocation] = React.useState<string>('');
	const [guests, setGuests] = React.useState<string>('');
	const [date, setDate] = React.useState<string>('');

	React.useEffect(() => {
		const getHotels = async () => {
			try {
				const response = await fetch(
					'https://holidaze-bt.herokuapp.com/hotels/'
				);
				const data = await response.json();
				setHotels(data);
			} catch (error) {
				console.warn('Couldnt fetch hotels');
			}
		};
		const setSearchValues = () => {
			const { location, date, guests } = router.query;
			const [l, d, g] = [location, date, guests].map((x) => {
				if (!x) return '';
				return typeof x === 'string' ? x : x.join();
			});

			setLocation(l);
			setDate(d);
			setGuests(g);
		};

		getHotels();
		setSearchValues();
	}, [router]);
	return (
		<>
			<div className="flex w-full gap-4">
				<Input
					IconComponent={Pin}
					value={location}
					onChange={(e) => setLocation(e.currentTarget.value)}
					className="w-full "
					type="search"
					placeholder="Location"
				/>
				<Input
					IconComponent={Person}
					value={guests}
					onChange={(e) => setGuests(e.currentTarget.value)}
					className="w-full "
					placeholder="Guests"
					type="number"
				/>
			</div>
			<div className="flex w-full">
				<Input
					IconComponent={Calendar}
					value={date}
					onChange={(e) => setDate(e.currentTarget.value)}
					placeholder="Date"
					type="date"
					className="w-full "
				/>
			</div>
			<Link href={`/search?date=${date}&location=${location}&guests=${guests}`}>
				<a>
					<Button lg>Search</Button>
				</a>
			</Link>
			{hotels.length ? (
				<>
					<p>or search for a hotel name</p>
					<Typeahead
						className="w-full"
						items={hotels}
						onSelect={(v: IResponseHotel) => {
							router.push(`/place/${v.id}`);
						}}
						selectionLabel={(option: IResponseHotel) =>
							`${option.name} - NOK${option.price}/night`
						}
					/>
				</>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Searchform;
