import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import Close from '../icons/Close';
import Bars from '../icons/Bars';

export interface NavigationProps {
	className?: string;
	dark?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ dark, className = '' }) => {
	const router = useRouter();
	const [jwt, setJwt] = React.useState<string>('');
	const [open, setOpen] = React.useState<boolean>(false);
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
	if (!dark) classes.push('bg-gray-500 sm:bg-transparent');

	return (
		<nav className={classes.join(' ')}>
			<div className="mx-auto container flex justify-between items-center">
				<Logo dark={dark} />
				<button className="sm:hidden" onClick={() => setOpen(!open)}>
					{open ? (
						<Close width={32} height={32} fill={dark ? 'black' : 'white'} />
					) : (
						<Bars width={32} height={32} fill={dark ? 'black' : 'white'} />
					)}
					<span className="sr-only">Trigger hamburger menu</span>
				</button>
				<div
					className={`absolute sm:static z-50 left-0 transition-all ${
						dark ? 'bg-blue-50' : 'bg-gray-500 text-gray-100'
					} sm:bg-transparent sm:text-black w-full sm:w-auto p-4 sm:p-0 flex flex-col sm:flex-row gap-4 items-center ${
						open ? 'top-14' : '-top-full'
					}`}
				>
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
