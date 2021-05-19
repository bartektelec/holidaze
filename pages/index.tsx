import Head from 'next/head';
import Main from '../components/templates/Main';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>Holidaze</title>
			</Head>
			<div>
				<Main>
					<div className="p-4 py-10 flex flex-col gap-10 text-gray-800">
						<h2 className="text-3xl font-semibold">Popular destinations</h2>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							{['trondheim', 'oslo', 'bergen'].map((city) => (
								<Link key={city} href={`/search?location=${city}`}>
									<a className="filter grayscale hover:filter-none transition-all">
										<div
											style={{ backgroundImage: `url(./assets/${city}.jpg)` }}
											className="bg-cover bg-center h-56"
										/>
										<div className="flex justify-between py-2 font-semibold">
											<p className="capitalize">{city}</p>
										</div>
									</a>
								</Link>
							))}
						</div>
					</div>
					<div className="ml-4 h-2 w-1/2 bg-gray-200"></div>
					<div className="p-4 py-10 flex flex-col gap-10">
						<h2 className="text-3xl font-semibold">Search by type</h2>
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
							{['hotel', 'hostel', 'apartment', 'home'].map((type) => (
								<Link key={type} href={`/search?type=${type}`}>
									<a className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded">
										<div className="h-20 w-20 bg-gray-500"></div>
										<div className="capitalize text-lg font-semibold">
											{type}
										</div>
									</a>
								</Link>
							))}
						</div>
					</div>
				</Main>
			</div>
		</>
	);
}
