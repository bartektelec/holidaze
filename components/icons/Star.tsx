import * as React from 'react';

const Icon: React.FC<IIconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.99998 1.33337L10.06 5.50671L14.6666 6.18004L11.3333 9.42671L12.12 14.0134L7.99998 11.8467L3.87998 14.0134L4.66665 9.42671L1.33331 6.18004L5.93998 5.50671L7.99998 1.33337Z"
				stroke="#4A5568"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Icon;
