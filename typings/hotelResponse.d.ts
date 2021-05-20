interface IProviderMetadata {
	public_id: string;
	resource_type: string;
}

interface IResponseThumbnailSize {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	width: number;
	height: number;
	size: number;
	path: {};
	url: string;
	provider_metadata: IProviderMetadata;
}

interface IResponseImageFormat {
	thumbnail: IResponseThumbnailSize;
	large: IResponseThumbnailSize;
	medium: IResponseThumbnailSize;
	small: IResponseThumbnailSize;
}

interface IResponseImage {
	id: number;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: IResponseImageFormat;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: {};
	provider: string;
	provider_metadata: IProviderMetadata;
	created_at: string;
	updated_at: string;
}

interface IResponseBooking {
	id: number;
	arrival: Date;
	departure: Date;
	information: string;
	hotel: IResponseHotel;
	customer: string;
	phone: string;
	confirmed: boolean;
	created_at: Datetime;
	updated_at: Datetime;
}

interface IResponseHotel {
	id: number;
	name: string;
	description: string;
	type: string;
	rating: number;
	price: number;
	address: string;
	beds: number;
	bedrooms: number;
	bathrooms: number;
	adults: number;
	children: number;
	featured: boolean;
	created_at: string;
	updated_at: string;
	images: Array<IResponseImage>;
	bookings: Array<IResponseBooking>;
}
