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
					<div className="py-4 flex flex-col gap-4 text-gray-800">
						<h2 className="text-3xl font-semibold">Popular destinations</h2>
						<div className="grid grid-cols-3 gap-4">
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
					<div className="h-2 w-1/2 bg-gray-200"></div>
					<div className="py-4 flex flex-col gap-4">
						<h2 className="text-3xl font-semibold">Search by type</h2>
					</div>
				</Main>
			</div>
		</>
	);
}
