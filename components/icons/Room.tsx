import * as React from 'react';

const Icon: React.FC<IIconProps> = ({ ...props }) => (
	<svg
		{...props}
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14 6V21H3V19H5V3H14V4H19V19H21V21H17V6H14ZM10 11V13H12V11H10Z"
			fill="#4A5568"
		/>
	</svg>
);
export default Icon;
