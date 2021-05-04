import * as React from 'react';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';

export interface NavigationProps {
	className?: string;
	dark?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ dark, className = '' }) => {
	const classes = [className, 'p-4'];
	if (dark) classes.push('bg-blue-50');

	return (
		<nav className={classes.join(' ')}>
			<div className="mx-auto container flex justify-between items-center">
				<Logo dark={dark} />
				<div className="flex gap-4 items-center">
					<Button secondary>Register</Button>
					<Button>Sign in</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
