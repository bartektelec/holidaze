import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ArrowCircle from '../icons/ArrowCircle';
import Magnifier from '../icons/Magnifier';
import Input from '../atoms/Input';
import SearchForm from './SearchForm';
import Chevron from '../icons/Chevron';

export interface SearchbarProps {
	className?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ className = '' }) => {
	const router = useRouter();
	const formRef = React.useRef<HTMLDivElement>(null);
	const [inputValue, setInputValue] = React.useState<string>('');
	const [extended, setExtended] = React.useState<boolean>(false);
	React.useEffect(() => {
		const setIninitialInput = () => {
			if (!router?.query) return;
			const { location, date, guests } = router.query;

			let [l, d, g] = [location, date, guests].map((x) => {
				if (!x) return '';
				return typeof x === 'string' ? x : x.join();
			});

			l = l.trim().replace(/^\w/, (c) => c.toUpperCase());
			d = d ? new Date(d).toDateString() : null;
			let tmp = '';
			if (l) tmp += l;
			if (tmp && d) tmp += ' - ';
			if (d) tmp += d;
			if (tmp && g) tmp += ' - ';
			if (g) tmp += `${g} guests`;

			setInputValue(tmp);
			setExtended(false);
		};
		setIninitialInput();
	}, [router]);

	React.useEffect(() => {
		if (extended) {
			formRef.current.classList.remove('hidden');
		} else {
			formRef.current.classList.add('hidden');
		}
	}, [extended]);
	let classes = [className, 'bg-blue-50 w-full py-5'];
	let chevronStyles = `transition ${extended && 'transform rotate-180'}`;

	return (
		<div className={classes.join(' ')}>
			<div className="mx-auto container px-4 flex flex-wrap items-center">
				<Link href="/">
					<a className="flex gap-4 font-bold hover:opacity-75">
						<ArrowCircle width={24} height={24} />
						Go back
					</a>
				</Link>

				<Input
					id="ExpandSearch"
					label="Search"
					className="w-1/2 ml-8 mr-2"
					IconComponent={Magnifier}
					value={inputValue}
					readOnly
					onClick={() => {
						setExtended(!extended);
					}}
				/>
				<Chevron className={chevronStyles} width={24} height={24} />
			</div>
			<div ref={formRef} className="mx-auto container">
				<div className="py-4 px-4 sm:pl-36 flex flex-col gap-4 max-w-prose">
					<h2>Search for a place</h2>
					<form className="inline-flex flex-col items-start gap-2">
						<SearchForm />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Searchbar;
