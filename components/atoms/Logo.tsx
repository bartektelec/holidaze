import * as React from 'react';
import Link from 'next/link';

export interface LogoProps {
	className?: string;
	dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', dark }) => {
	const classes = [
		className,
		'text-white font-poppins font-extrabold text-3xl',
	];
	if (dark) classes.push('text-blue-700');
	const last = dark ? 'text-blue-400' : 'text-blue-700';
	return (
		<Link href="/">
			<a className={classes.join(' ')}>
				holi<span className={last}>daze</span>
			</a>
		</Link>
	);
};

export default Logo;
