import * as React from 'react';
import Input from '../atoms/Input';
import { debounce } from 'lodash';
import request from '../../services/api';

export interface TypeaheadProps<T extends unknown> {
	className?: string;
	selectionLabel?: (option: T) => string;
	onSelect?: (v: T) => void;
}
const Typeahead: React.FC<TypeaheadProps<any>> = ({
	className = '',
	selectionLabel = (item: IResponseHotel) => item.name,
	onSelect,
}) => {
	const [query, setQuery] = React.useState<string>('');
	const [foundItems, setFoundItems] = React.useState<any[]>([]);
	const [status, setStatus] = React.useState<'loading' | 'idle' | 'error'>(
		'idle'
	);

	const handleSearch = React.useCallback(() => {
		setStatus('idle');
		if (!query) return setFoundItems([]);

		setStatus('loading');
		request(`/hotels?name_contains=${query}`)
			.then((response) => {
				setStatus('idle');
				setFoundItems(response.data);
			})
			.catch((error) => setStatus('error'));
	}, [query]);

	React.useEffect(
		debounce(() => {
			handleSearch();
		}, 500),
		[query]
	);

	return (
		<div className={`flex-inline flex-col relative ${className}`}>
			<Input
				id="hotelSearch"
				label="Hotel name"
				className={className}
				type="search"
				value={query}
				onInput={(e) => setQuery(e.currentTarget.value)}
				placeholder="Search for a hotel name..."
			/>
			<ul className="bg-white overflow-hidden shadow-md rounded-md flex-inline flex-col min-w-max w-full absolute">
				{foundItems.length
					? foundItems.map((item) => (
							<li
								key={selectionLabel(item)}
								className="py-2 px-3 cursor-pointer hover:bg-gray-100"
								onClick={() => {
									setFoundItems([]);
									onSelect?.(item);
								}}
							>
								{selectionLabel(item)}
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
};

export default Typeahead;
