import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';

export interface NavigationProps {
	className?: string;
	dark?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ dark, className = '' }) => {
	const router = useRouter();
	const [jwt, setJwt] = React.useState<string>('');
	React.useEffect(() => {
		const token = localStorage.getItem('jwt') || '';
		setJwt(token);
	}, []);

	const handleLogout = () => {
		setJwt('');
		localStorage.removeItem('jwt');
		router.push('/');
	};

	const classes = [className, 'p-4'];
	if (dark) classes.push('bg-blue-50');

	return (
		<nav className={classes.join(' ')}>
			<div className="mx-auto container flex justify-between items-center">
				<Logo dark={dark} />
				<div className="flex gap-4 items-center">
					{jwt ? (
						<>
							<Link href="/dashboard">
								<a>Hotels</a>
							</Link>
							<Link href="/dashboard/bookings">
								<a>Bookings</a>
							</Link>
							<Link href="/dashboard/inbox">
								<a>Messages</a>
							</Link>
							<Button secondary onClick={handleLogout}>
								Log out
							</Button>
						</>
					) : (
						<>
							<Button secondary>Register</Button>
							<Link href="/dashboard">
								<a>
									<Button>Sign in</Button>
								</a>
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
