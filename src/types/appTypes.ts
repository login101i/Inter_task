import { ReactNode, Dispatch, SetStateAction, ChangeEvent } from 'react';

export type TInitialState = {
	products: TProduct[];
	isLoaded: boolean;
	error: null | string;
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
	handlePagination: (direction: string) => void;
	currentPage: number;
	apiTotalPages: number;
	apiItInitialPageNumber: number;
	handleModal: (product: TProduct[]) => void;
	setIsModal: Dispatch<SetStateAction<boolean>>;
	isModal: boolean;
	modalProductInfo: TProduct[];
	handleProducts: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type TProduct = {
	id: number;
	name: string;
	year: number;
	color: string;
	pantoneValue: string;
};

export type TGetProductsResponse = {
	page: number;
	perPage: number;
	total: number;
	totalPages: number;
	data: TProduct[];
	support: TSupport;
};

export type TSupport = {
	text: string;
	url: string;
};

export type ProductContextProps = {
	children: ReactNode;
};
