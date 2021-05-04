import * as React from 'react';

export interface HotelDetailsProps {
	hotel: IResponseHotel;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => {
	return <div>{hotel.name}</div>;
};

export default HotelDetails;
