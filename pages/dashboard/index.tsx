import * as React from 'react';
import Layout from '../../components/templates/Default';
import Admin from '../../components/templates/Admin';
import Card from '../../components/molecules/Card';
import Button from '../../components/atoms/Button';
import request from '../../services/api';
import Input from '../../components/atoms/Input';

export interface DashboardProps {}
const initialEstablishment = {
	name: '',
	description: '',
	type: 'hostel',
	rating: 0,
	price: 0,
	address: '',
	beds: 0,
	bedrooms: 0,
	bathrooms: 0,
	adults: 0,
	children: 0,
	featured: false,
};
const establishmentReducer = <T extends typeof initialEstablishment>(
	state: T,
	action: { type: keyof T; payload: T[keyof T] }
): typeof initialEstablishment => {
	if (action.type) {
		return { ...state, [action.type]: action.payload };
	} else {
		return { ...state };
	}
};

const Dashboard: React.FC<DashboardProps> = () => {
	const [places, setPlaces] = React.useState<IResponseHotel[]>([]);
	const [alert, setAlert] = React.useState<string>('');
	const [token, setToken] = React.useState<string>('');
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [form, dispatch] = React.useReducer(
		establishmentReducer,
		initialEstablishment
	);
	React.useEffect(() => {
		setAlert('');
		const fetchPlaces = async () => {
			try {
				const response = await request('/hotels');
				setPlaces(response.data);
			} catch (error) {
				setAlert(`<span class='text-red-500'>${error}</span>`);
			}
		};

		fetchPlaces();
	}, [token]);

	React.useEffect(() => {
		if (modalOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}, [modalOpen]);

	return (
		<Layout>
			{modalOpen && (
				<div className="fixed bg-opacity-50 bg-black top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center">
					<div className="p-4 bg-white rounded-md shadow flex flex-col gap-4">
						<h2 className="text-xl">New establishment</h2>
						<form className="flex flex-col gap-4">
							<Input
								id="hotelName"
								label="Name"
								value={form.name}
								onChange={(e) =>
									dispatch({ type: 'name', payload: e.currentTarget.value })
								}
							/>
							<Input
								id="hotelPrice"
								label="Price"
								type="number"
								value={form.price}
								onChange={(e) =>
									dispatch({
										type: 'price',
										payload: e.currentTarget.valueAsNumber,
									})
								}
							/>
							<Input
								id="hotelAddress"
								label="Address"
								value={form.address}
								onChange={(e) =>
									dispatch({
										type: 'address',
										payload: e.currentTarget.value,
									})
								}
							/>
							<div className="bg-white relative inline-flex items-center gap-2 rounded-md border-2 placeholder:text-gray-500 p-2 focus-within:border-blue-400 border-blue-200 text-gray-700 ">
								<label
									className="absolute text-xs -top-2 left-1 px-2 bg-white rounded-md border border-blue-200"
									htmlFor="message"
								>
									Description
								</label>
								<textarea
									required
									id="message"
									className="resize-none w-full bg-transparent disabled:cursor-not-allowed focus:outline-none disabled:bg-transparent"
								/>
							</div>
							<label className="flex justify-between" htmlFor="type">
								Establishment type
								<select
									className="p-1 border-2 rounded-md border-blue-200"
									id="type"
									value={form.type}
									onChange={(e) =>
										dispatch({ type: 'type', payload: e.currentTarget.value })
									}
								>
									{['hotel', 'hostel', 'home', 'apartment'].map((type) => (
										<option key={type} value={type}>
											{type}
										</option>
									))}
								</select>
							</label>
							<Input
								id="bathrooms"
								label="Bathrooms"
								value={form.bathrooms}
								onChange={(e) =>
									dispatch({
										type: 'bathrooms',
										payload: e.currentTarget.value,
									})
								}
							/>
							<div className="flex gap-4">
								<Input
									id="bedrooms"
									label="Bedrooms"
									value={form.bedrooms}
									onChange={(e) =>
										dispatch({
											type: 'bedrooms',
											payload: e.currentTarget.value,
										})
									}
								/>
								<Input
									id="beds"
									label="Beds"
									value={form.beds}
									onChange={(e) =>
										dispatch({
											type: 'beds',
											payload: e.currentTarget.value,
										})
									}
								/>
							</div>
							<div className="flex gap-4">
								<Input
									id="adults"
									label="Adults"
									value={form.adults}
									onChange={(e) =>
										dispatch({
											type: 'adults',
											payload: e.currentTarget.value,
										})
									}
								/>
								<Input
									id="children"
									label="Children"
									value={form.children}
									onChange={(e) =>
										dispatch({
											type: 'children',
											payload: e.currentTarget.value,
										})
									}
								/>
							</div>
							<label htmlFor="featured">
								<input
									id="featured"
									className="mr-2"
									type="checkbox"
									checked={form.featured}
									onChange={(e) =>
										dispatch({
											type: 'featured',
											payload: e.currentTarget.checked,
										})
									}
								/>
								Featured
							</label>
							<div className="flex justify-between">
								<Button>Submit</Button>
								<Button secondary onClick={() => setModalOpen(false)}>
									Close
								</Button>
							</div>
						</form>
					</div>
				</div>
			)}
			<Admin handleToken={setToken}>
				<div className="flex flex-col py-8 gap-4">
					<h1 className="text-2xl font-bold">Places</h1>
					<Button onClick={() => setModalOpen(true)} className="self-end">
						Add new
					</Button>
					<p dangerouslySetInnerHTML={{ __html: alert }}></p>
					<div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 grid-rows-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-start gap-8 py-8">
						{places.map((hotel) => (
							<Card key={hotel.id} editable hotel={hotel} />
						))}
					</div>
				</div>
			</Admin>
		</Layout>
	);
};

export default Dashboard;
