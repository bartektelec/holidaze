import * as React from 'react';
import Link from 'next/link';

import Button from '../atoms/Button';

import Star from '../icons/Star';
import Trash from '../icons/Trash';
import Pencil from '../icons/Pencil';

export interface CardProps {
	hotel: IResponseHotel;
	editable?: boolean;
}

const Card: React.FC<CardProps> = ({ hotel, editable }) => {
	const [imgIdx, setImgIdx] = React.useState<number>(0);
	const [showConfirm, setShowConfirm] = React.useState<boolean>(false);
	const addressArr = hotel.address.split(' ');
	const cityName = addressArr[addressArr.length - 1];

	return (
		<div className="inline-flex flex-col p-4 rounded-md hover:bg-gray-100 hover:shadow-sm">
			<Link href={`/place/${hotel.id}`}>
				<a className="flex-col gap-1 inline-flex  hover:text-blue-800">
					<div className="relative ">
						<img
							className="min-w-48 w-full h-48 filter contrast-75 object-cover rounded-md border-2 border-gray-300"
							src={hotel.images[imgIdx].formats.thumbnail.url}
							alt={hotel.images[imgIdx].alternativeText}
						/>
						<div className="absolute py-1 px-2 shadow-md top-2 left-2 bg-white rounded-md flex items-center gap-3">
							<Star width={12} height={12} />
							<p className="text-sm">{hotel.rating}</p>
						</div>
						<div className="flex w-full gap-2 justify-center absolute bottom-3">
							{hotel.images.length > 1 &&
								hotel.images.map((image, idx) => {
									let dotClass =
										'h-3 w-3 rounded-full border-2 border-white hover:bg-gray-100';
									if (idx === imgIdx) dotClass += ' bg-white';
									return (
										<div
											key={image.id}
											onMouseOver={() => setImgIdx(idx)}
											className={dotClass}
										></div>
									);
								})}
						</div>
					</div>
					<p className="capitalize text-xs">
						{hotel.type} in {cityName}
					</p>
					<h3 className="text-base">{hotel.name}</h3>
					<div className="flex justify-end text-2xl">NOK {hotel.price}</div>
				</a>
			</Link>
			{editable && (
				<div className="flex flex-col gap-2">
					<div className="flex justify-end gap-2">
						<Button sm secondary>
							<Pencil width={16} height={16} />
						</Button>
						<Button onClick={() => setShowConfirm(true)} sm secondary>
							<Trash width={16} height={16} />
						</Button>
					</div>
					{showConfirm && (
						<div className="flex flex-col items-center">
							<p>Are you sure?</p>
							<div className="flex gap-2">
								<Button sm secondary className="hover:bg-red-300">
									Yes
								</Button>
								<Button sm onClick={() => setShowConfirm(false)}>
									No
								</Button>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Card;
