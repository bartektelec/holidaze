import * as React from 'react';
import Link from 'next/link';
import ArrowCircle from '../icons/ArrowCircle';
import Star from '../icons/Star';
import People from '../icons/People';
import Room from '../icons/Room';
import Bed from '../icons/Bed';
import Bathroom from '../icons/Bathroom';
import Time from '../icons/Time';
import Calendar from '../icons/Calendar';
import Person from '../icons/Person';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import request from '../../services/api';

export interface HotelDetailsProps {
	hotel: IResponseHotel;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => {
	const [msg, setMsg] = React.useState<string>('');
	const [currentImage, setCurrentImage] = React.useState<number>(0);
	const [customer, setCustomer] = React.useState<string>('');
	const [information, setInformation] = React.useState<string>('');
	const [phoneNo, setPhoneNo] = React.useState<string>('');
	const [nights, setNights] = React.useState<number>(0);
	const [arrive, setArrive] = React.useState<string>(
		new Date().toJSON().split('T')[0]
	);
	const [departure, setDeparture] = React.useState<string>(
		new Date().toJSON().split('T')[0]
	);

	const handleSubmitBooking = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const processForm = async () => {
			try {
				await request.post('/bookings/', {
					arrival: arrive,
					departure,
					confirmed: true,
					phone: phoneNo,
					customer,
					information,
					hotel: hotel.id,
				});
				[
					setCustomer,
					setArrive,
					setDeparture,
					setPhoneNo,
					setInformation,
				].forEach((func) => {
					func('');
				});
				setMsg(`<span class='text-green-500'>Booked successfully</span>`);
			} catch (error) {
				setMsg(`<span class='text-red-500'>${error}</span>`);
				console.warn(error);
			}
		};
		processForm();
	};

	React.useEffect(() => {
		if (!arrive || !departure) return;
		const a = new Date(arrive);
		const b = new Date(departure);
		if (b < a) return setNights(0);

		const timeDiff = b.getTime() - a.getTime();

		const msInDay = 1000 * 60 * 60 * 24;
		const daysDiff = timeDiff / msInDay;
		setNights(daysDiff);
	}, [arrive, departure]);
	return (
		<div className="py-8 px-4 sm:px-0 flex flex-col gap-8">
			<Link href="/">
				<a className="flex gap-2 text-lg font-bold items-center">
					<ArrowCircle width={24} height={24} />
					Go back
				</a>
			</Link>
			<div className="flex gap-2 items-center">
				<Star width={16} height={16} />
				{hotel.rating}
			</div>
			<h1 className="text-3xl font-bold">{hotel.name}</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-32">
				<div className="flex flex-col gap-8">
					{hotel.images.length ? (
						<>
							<img
								className="rounded-md shadow-lg h-96 object-cover"
								src={hotel.images[currentImage].url}
								alt={hotel.images[currentImage].alternativeText}
							/>
							<div className="flex flex-wrap gap-4 w-full">
								{hotel.images.length > 1 &&
									hotel.images.map((image, idx) => (
										<img
											key={image.id}
											className="cursor-pointer rounded-md shadow-sm opacity-50 hover:opacity-100 w-32 h-32 object-cover"
											onClick={() => setCurrentImage(idx)}
											src={image.formats.thumbnail.url}
											alt={image.alternativeText}
										/>
									))}
							</div>
						</>
					) : null}
				</div>
				<div className="flex flex-col gap-4">
					<h2 className="text-3xl font-black">NOK {hotel.price} / night</h2>
					<div className="grid grid-cols-2 grid-rows-2 max-w-sm gap-2">
						<div className="flex gap-2 items-center">
							<Room width={24} height={24} /> {hotel.bedrooms} bedrooms
						</div>
						<div className="flex gap-2 items-center">
							<Bathroom width={24} height={24} /> {hotel.bathrooms} bathrooms
						</div>
						<div className="flex gap-2 items-center">
							<Bed width={24} height={24} /> {hotel.beds} beds
						</div>
						<div className="flex gap-2 items-center">
							<People width={24} height={24} /> {hotel.adults} adults,{' '}
							{hotel.children} children
						</div>
					</div>
					<p className="max-w-prose">{hotel.description}</p>
					<p className="flex gap-2 items-center">
						<Time width={24} height={24} /> Check-in: 14:00, check-out: 10:00
					</p>
					<form onSubmit={handleSubmitBooking} className="flex flex-col gap-4">
						<div className="flex flex-wrap gap-4">
							<Input
								id="ArrivalDate"
								label="Arrival"
								className="flex-1 "
								type="date"
								required
								IconComponent={Calendar}
								value={arrive}
								onChange={(e) => setArrive(e.currentTarget.value)}
							/>
							<Input
								id="DepartureDate"
								label="Departure"
								className="flex-1 "
								type="date"
								IconComponent={Calendar}
								value={departure}
								required
								onChange={(e) => setDeparture(e.currentTarget.value)}
							/>
							<Input
								min="1"
								max={hotel.adults + hotel.children}
								id="GuestsInput"
								label="Guests"
								className="flex-1 "
								type="number"
								IconComponent={Person}
								defaultValue={1}
							/>
							<div className="grid gap-4 w-full">
								<Input
									id="customerName"
									label="Customer name"
									className=""
									value={customer}
									required
									onChange={(e) => setCustomer(e.currentTarget.value)}
								/>
								<Input
									id="customerPhone"
									label="Phone number"
									className=""
									type="tel"
									required
									value={phoneNo}
									onChange={(e) => setPhoneNo(e.currentTarget.value)}
								/>
								<Input
									id="infoText"
									label="Additional information"
									className=""
									type="text"
									value={information}
									onChange={(e) => setInformation(e.currentTarget.value)}
								/>
							</div>
						</div>
						<div dangerouslySetInnerHTML={{ __html: msg }} />
						<Button
							disabled={!nights || !customer || !phoneNo}
							className="justify-center"
						>
							Book
						</Button>
					</form>
					<div className="rounded-md border-2 border-gray-400 bg-gray-100 py-6 px-12">
						<div className="flex-1 flex items-center justify-between">
							<p>
								{nights} nights x NOK {hotel.price}
							</p>
							<p>NOK {hotel.price * nights}</p>
						</div>
						<div className="flex-1 flex items-center justify-between">
							<p>Cleaning fee</p>
							<p>NOK 29.99</p>
						</div>
						<div className="flex-1 flex items-center justify-between">
							<p>Administration fee</p>
							<p>NOK 39.99</p>
						</div>
						<div className="bg-gray-400 h-px my-4" />
						<div className="font-bold flex-1 flex items-center justify-between">
							<p>Total</p>
							<p>NOK {(69.98 + hotel.price * nights).toFixed(2)}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelDetails;
