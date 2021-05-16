import * as React from 'react';
import Link from 'next/link';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return <footer className="bg-gray-200 p-4 text-gray-900">
		<div className='container mx-auto px-4'>
			<div className='flex flex-col gap-1 items-start'>
				<h3 className='font-bold py-1'>Pages</h3>
				<Link href='/'>
					<a className='py-1 px-2 rounded-sm hover:bg-gray-300'>Home</a>
				</Link>
				<Link href='/search'>
					<a className='py-1 px-2 rounded-sm hover:bg-gray-300'>Places</a>
				</Link>
				<Link href='/contact'>
					<a className='py-1 px-2 rounded-sm hover:bg-gray-300'>Contact</a>
				</Link>
				<Link href='/dashboard'>
					<a className='py-1 px-2 rounded-sm hover:bg-gray-300'>Admin login</a>
				</Link>
			</div>
		</div>
	</footer>;
};

export default Footer;
