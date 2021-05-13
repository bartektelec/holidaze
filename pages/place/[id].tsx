import * as React from 'react';
import Template from '../../components/templates/Default';
import HotelDetails from '../../components/templates/HotelDetails';
import Searchbar from '../../components/organisms/Searchbar';
import request from '../../services/api';

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
		const response = await request('hotels/' + context.params.id);
		const hotel = await response.data;
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
