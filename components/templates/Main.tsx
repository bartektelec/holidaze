import * as React from 'react';
import { useRouter } from 'next/router';
import Navigation from '../molecules/Navigation';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Typeahead from '../molecules/Typeahead';
import Spinner from '../atoms/Spinner';

import Pin from '../icons/Pin';
import Person from '../icons/Person';
import Calendar from '../icons/Calendar';

export interface MainProps {}

const Main: React.FC<MainProps> = () => {
	const router = useRouter();

	const [hotels, setHotels] = React.useState<Array<IResponseHotel>>([]);
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

		getHotels();
	}, []);
	return (
		<>
			<header
				className="bg-cover"
				style={{ backgroundImage: 'url(./assets/background.png)' }}
			>
				<Navigation />
				<div className="py-32 flex flex-col items-center justify-center">
					<form className="py-8 px-24 bg-gray-100 inline-flex items-center flex-col gap-4 rounded-md shadow-md">
						<h1 className="text-3xl font-bold text-blue-900">
							Find your <span className="font-extrabold">perfect</span> stay
						</h1>
						<div className="h-px w-64 bg-blue-200" />
						<div className="flex gap-4">
							<Input IconComponent={Pin} placeholder="Location" />
							<Input IconComponent={Person} placeholder="Guests" />
						</div>
						<div className="flex w-full">
							<Input
								IconComponent={Calendar}
								placeholder="Date"
								className="w-full "
							/>
						</div>
						<Button lg>Search</Button>{' '}
						{hotels.length ? (
							<div className="flex w-full flex-col gap-4 items-center">
								or search for a hotel name
								<Typeahead
									className="w-full"
									items={hotels}
									onSelect={(v: IResponseHotel) => {
										router.push(`/details/${v.id}`);
									}}
									selectionLabel={(option: IResponseHotel) =>
										`${option.name} - NOK${option.price}/night`
									}
								/>
							</div>
						) : (
							<Spinner />
						)}
					</form>
				</div>
			</header>
		</>
	);
};

export default Main;
