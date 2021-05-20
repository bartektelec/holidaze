import * as React from 'react';
import request from '../../services/api';
import Admin from '../../components/templates/Admin';
import Layout from '../../components/templates/Default';

export interface InboxProps {}

const Inbox: React.FC<InboxProps> = () => {
	const [data, setData] = React.useState<IResponseBooking[]>();
	const [expanded, setExpanded] = React.useState<number>(-1);
	const [token, setToken] = React.useState<string>('');
	React.useEffect(() => {
		const fetchBookings = async () => {
			try {
				const response = await request('/bookings', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setData(response.data);
				console.log(response.data);
			} catch (error) {}
		};

		fetchBookings();
	}, [token]);
	return (
		<Layout>
			<Admin handleToken={setToken}>
				<div className="flex flex-col py-8 gap-8">
					<h1 className="text-2xl font-bold">Bookings</h1>
					{data && (
						<div className="pb-32 border-2 border-gray-300 rounded-md">
							<div className="border-b-2 border-gray-300 py-4 px-6 text-sm font-semibold bg-gray-100">
								{data.length} bookings
							</div>
							{data.map((booking, idx) => (
								<ol className="border-b-2 border-gray-200 ">
									<li
										className={`w-full py-4 px-3 hover:bg-gray-100 text-sm flex items-center gap-4`}
										key={booking.id}
									>
										<div className={`rounded-full w-3 h-3`} />
										{booking.id} - {booking.hotel.name} - {booking.customer} (
										{booking.arrival} - {booking.departure})
									</li>
								</ol>
							))}
						</div>
					)}
				</div>
			</Admin>
		</Layout>
	);
};

export default Inbox;
