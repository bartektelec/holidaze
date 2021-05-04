import * as React from 'react';

const Icon: React.FC<IIconProps> = ({ ...props }) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<g data-name="Layer 2">
			<g data-name="list">
				<rect
					width="24"
					height="24"
					transform="rotate(180 12 12)"
					opacity="0"
				/>
				<circle cx="4" cy="7" r="1" />
				<circle cx="4" cy="12" r="1" />
				<circle cx="4" cy="17" r="1" />
				<rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
				<rect x="7" y="16" width="14" height="2" rx=".94" ry=".94" />
				<rect x="7" y="6" width="14" height="2" rx=".94" ry=".94" />
			</g>
		</g>
	</svg>
);

export default Icon;
