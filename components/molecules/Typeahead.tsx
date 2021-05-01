import * as React from 'react';
import Input from '../atoms/Input';

export interface TypeaheadProps<T extends unknown> {
	className?: string;
	limit?: number;
	items: T[];
	selectionLabel?: (option: T) => string;
	itemFilter?: (query: string, option: T) => boolean;
	onSelect?: (v: T) => void;
}
const Typeahead: React.FC<TypeaheadProps<any>> = ({
	className = '',
	items,
	selectionLabel = (item: IResponseHotel) => item.name,
	limit = items.length,
	onSelect,
	itemFilter = (q, item: IResponseHotel) => {
		const reg = new RegExp(q.replace(' ', '|'), 'gi');
		return reg.test(item.name);
	},
}) => {
	const [query, setQuery] = React.useState<string>('');
	const [foundItems, setFoundItems] = React.useState<any[]>([]);

	React.useEffect(() => {
		if (query.length < 3 && query.length > 0) return;
		const found = items.filter(
			(item, idx) => itemFilter(query, item) && idx < limit
		);

		setFoundItems(found);
	}, [query]);
	return (
		<div className={`flex-inline flex-col relative ${className}`}>
			<Input
				className={className}
				type="search"
				value={query}
				onChange={(event) => setQuery(event.currentTarget.value)}
				placeholder="Search for a hotel name..."
			/>
			<ul className="bg-white overflow-hidden shadow-md rounded-md flex-inline flex-col min-w-max w-full absolute">
				{foundItems.length !== items.length &&
					foundItems.map((item) => (
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
					))}
			</ul>
		</div>
	);
};

export default Typeahead;
