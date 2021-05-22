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
import request from '../../services/api';

export interface SearchformProps {}

const Searchform: React.FC<SearchformProps> = () => {
	const router = useRouter();
	const [location, setLocation] = React.useState<string>('');
	const [guests, setGuests] = React.useState<string>('');
	const [date, setDate] = React.useState<string>('');

	React.useEffect(() => {
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
		setSearchValues();
	}, [router]);
	return (
		<>
			<div className="flex w-full gap-4">
				<Input
					id="LocationSearch"
					label="Location"
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
					id="GuestsInput"
					label="Guests"
					min={0}
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
					id="DateSearch"
					label="Date"
				/>
			</div>
			<Link href={`/search?date=${date}&location=${location}&guests=${guests}`}>
				<a>
					<Button lg>Search</Button>
				</a>
			</Link>

			<p>or search for a hotel name</p>
			<Typeahead
				className="w-full"
				onSelect={(v: IResponseHotel) => {
					router.push(`/place/${v.id}`);
				}}
				selectionLabel={(option: IResponseHotel) =>
					`${option.name} - NOK${option.price}/night`
				}
			/>
		</>
	);
};

export default Searchform;
