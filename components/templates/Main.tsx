import * as React from 'react';
import Footer from '../molecules/Footer';
import Navigation from '../molecules/Navigation';
import SearchForm from '../organisms/SearchForm';

export interface MainProps {}

const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<header
				className="bg-cover bg-center"
				style={{ backgroundImage: 'url(./assets/background.png)' }}
			>
				<Navigation />
				<div className="py-32 flex flex-col items-center justify-center">
					<div className="py-8 px-8 md:px-24 bg-gray-100 inline-flex items-center flex-col gap-4 rounded-md shadow-md">
						<h1 className="text-3xl font-bold text-blue-900">
							Find your <span className="font-extrabold">perfect</span> stay
						</h1>
						<div className="h-px w-64 bg-blue-200" />
						<div>
							<form className="flex flex-col items-center gap-2">
								<SearchForm />
							</form>
						</div>
					</div>
				</div>
			</header>
			<main className="container mx-auto flex-1">{children}</main>
			<Footer />
		</div>
	);
};

export default Main;
