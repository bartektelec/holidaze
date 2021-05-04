import * as React from 'react';
import Template from '../../components/templates/Default';
import HotelDetails from '../../components/templates/HotelDetails';
import Searchbar from '../../components/organisms/Searchbar';

export interface PlaceProps {
	hotel: IResponseHotel;
}

const Place: React.FC<PlaceProps> = ({ hotel }) => {
	return (
		<Template>
			<HotelDetails hotel={hotel} />
		</Template>
	);
};

export async function getServerSideProps(context) {
	try {
		const response = await fetch(
			'https://holidaze-bt.herokuapp.com/hotels/' + context.params.id
		);
		const hotel = await response.json();
		return {
			props: {
				hotel,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
}
export default Place;
