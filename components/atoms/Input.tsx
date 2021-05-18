import * as React from 'react';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	value?: string | number;
	placeholder?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	className?: string;
	lg?: boolean;
	IconComponent?: React.FC<IIconProps>;
	disabled?: boolean;
	readOnly?: boolean;
}

const Input: React.FC<InputProps> = ({
	children,
	className = '',
	lg,
	IconComponent,
	onClick,
	id,
	label,
	...props
}) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	let cn =
		'bg-white relative inline-flex items-center gap-2 rounded-md border-2 placeholder:text-gray-500 p-2 focus-within:border-blue-400 ';
	cn += props.disabled
		? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed '
		: 'border-blue-200 text-gray-700 ';
	cn += lg ? 'px-8 ' : '';
	cn += className;

	let labelCn =
		'absolute text-xs -top-2 left-1 px-2 bg-white rounded-md border border-blue-200';
	return (
		<div className={cn} onClick={onClick}>
			{IconComponent && <IconComponent width={24} height={24} fill="#4A5568" />}
			<label className={labelCn} htmlFor={id}>
				{label}
				{props.required && (
					<span className="text-md text-red-500 ml-2">
						*<span className="sr-only">Required field</span>
					</span>
				)}
			</label>
			<input
				id={id}
				ref={inputRef}
				className="w-full bg-transparent disabled:cursor-not-allowed focus:outline-none disabled:bg-transparent"
				{...props}
			/>
		</div>
	);
};

export default Input;
