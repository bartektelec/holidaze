import * as React from 'react';

export interface ButtonProps {
	value?: string;
	placeholder?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	className?: string;
	lg?: boolean;
	IconComponent?: React.FC<IIconProps>;
	disabled?: boolean;
	readOnly?: boolean;
	type?: 'text' | 'number' | 'phone' | 'email' | 'date' | 'password' | 'search';
}

const Button: React.FC<ButtonProps> = ({
	children,
	className = '',
	lg,
	IconComponent,
	onClick,
	...props
}) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	let cn =
		'bg-white inline-flex items-center gap-2 rounded-md border-2 placeholder:text-gray-500 p-2 focus-within:border-blue-400 ';
	cn += props.disabled
		? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed '
		: 'border-blue-200 text-gray-700 ';
	cn += lg ? 'px-8 ' : '';
	cn += className;
	return (
		<div className={cn} onClick={onClick}>
			{IconComponent && <IconComponent width={24} height={24} fill="#4A5568" />}
			<input
				ref={inputRef}
				className="w-full bg-transparent disabled:cursor-not-allowed focus:outline-none disabled:bg-transparent"
				{...props}
			/>
		</div>
	);
};

export default Button;
