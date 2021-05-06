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

export interface HotelDetailsProps {
	hotel: IResponseHotel;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => {
	const [currentImage, setCurrentImage] = React.useState<number>(0);
	const [nights, setNights] = React.useState<number>(0);
	return (
		<div className="py-8 flex flex-col gap-8">
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
			<div className="grid grid-cols-2 gap-32">
				<div className="flex flex-col gap-8">
					<img
						className="rounded-md shadow-lg"
						src={hotel.images[currentImage].url}
						alt={hotel.images[currentImage].alternativeText}
					/>
					<div className="flex flex-wrap gap-4">
						{hotel.images.length > 1 &&
							hotel.images.map((image, idx) => (
								<img
									className="cursor-pointer rounded-md shadow-sm opacity-50 hover:opacity-100"
									onClick={() => setCurrentImage(idx)}
									src={image.formats.thumbnail.url}
									alt={image.alternativeText}
								/>
							))}
					</div>
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
					<form className="flex flex-col gap-4">
						<div className="flex flex-wrap gap-4">
							<Input className="flex-1 " type="date" IconComponent={Calendar} />
							<Input className="flex-1 " type="number" IconComponent={Person} />
						</div>
						<Button className="justify-center">Book</Button>
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
							<p>NOK {69.98 + hotel.price * nights}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelDetails;
