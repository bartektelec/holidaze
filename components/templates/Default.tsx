import * as React from 'react';
import Navigation from '../molecules/Navigation';
import Footer from '../molecules/Footer';

export interface DefaultProps {}

const Default: React.FC<DefaultProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<header>
				<Navigation dark />
			</header>
			<main className="container mx-auto p-4 flex-1">{children}</main>
			<Footer />
		</div>
	);
};

export default Default;
