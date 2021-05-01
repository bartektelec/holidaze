import * as React from 'react';

export interface SpinnerProps {}

const Spinner: React.FC<SpinnerProps> = () => {
	return (
		<div className="w-4 h-4 border-blue-500 rounded-full border-2 border-l-0 border-t-0 animate-spin"></div>
	);
};

export default Spinner;
