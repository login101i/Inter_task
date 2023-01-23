import { ReactNode, Dispatch, SetStateAction, ChangeEvent } from 'react';

export type TInitialState = {
	products: TProduct[];
	isLoaded: boolean;
	errorStatus: null | string;
	setErrorStatus: Dispatch<SetStateAction<string | null>>;
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
	handlePagination: (direction: string) => void;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	apiTotalPages: number;
	apiItInitialPageNumber: number;
	handleModal: (product: TProduct[]) => void;
	setIsModal: Dispatch<SetStateAction<boolean>>;
	isModal: boolean;
	modalProductInfo: TProduct[];
	handleProductsById: (e: ChangeEvent<HTMLInputElement>) => void;
	itemsPerPage: number;
	link: string;
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
