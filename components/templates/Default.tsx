import * as React from 'react';
import Navigation from '../molecules/Navigation';

export interface DefaultProps {}

const Default: React.FC<DefaultProps> = ({ children }) => {
	return (
		<div className="min-h-screen">
			<header>
				<Navigation dark />
			</header>
			<main className="container mx-auto">{children}</main>
		</div>
	);
};

export default Default;
