import { createContext, useEffect, useState, FC, useContext, ChangeEvent } from 'react';
import { axiosInstanceWithMapCaseMiddleware } from '../helpers/request';
import { TInitialState, TProduct, TGetProductsResponse, ProductContextProps } from '../types/appTypes';
import { numberValidation } from '../helpers/validators';

const INITIAL_STATE: TInitialState = {
	products: [],
	isLoaded: false,
	errorStatus: null,
	setErrorStatus: () => {},
	query: '',
	setQuery: () => {},
	handlePagination: () => {},
	currentPage: 1,
	setCurrentPage: () => {},
	apiTotalPages: 3,
	apiItInitialPageNumber: 1,
	handleModal: () => {},
	setIsModal: () => {},
	isModal: false,
	modalProductInfo: [],
	handleProductsById: () => {},
	itemsPerPage: 5,
	link: ``,
};

export const ProductContext = createContext<TInitialState>(INITIAL_STATE);

export const useProductContext = () => {
	return useContext(ProductContext);
};

export const ProductContextProvider: FC<ProductContextProps> = ({ children }) => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [products, setProducts] = useState<TProduct[]>([]);
	const [apiTotalPages, setApiTotalPages] = useState<number>(1);
	const [isModal, setIsModal] = useState<boolean>(false);
	const [modalProductInfo, setModalProductInfo] = useState<TProduct[]>([]);
	const [errorStatus, setErrorStatus] = useState<string | null>(null);
	const [query, setQuery] = useState<string>('');
	let [currentPage, setCurrentPage] = useState<number>(1);
	const itemsPerPage: number = 5;
	const apiItInitialPageNumber: number = 1;
	const directionLeft: string = 'left';
	const directionRight: string = 'right';
	let link = `/products?page=${currentPage}&per_page=${itemsPerPage}`;
	if (query) link = `/products?page=${currentPage}&per_page=${itemsPerPage}&id=${query}`;

	const handlePagination = (direction: string) => {
		if (direction === directionLeft) {
			if (currentPage === apiItInitialPageNumber) return;
			setCurrentPage(--currentPage);
		} else if (direction === directionRight) {
			if (currentPage === apiTotalPages) return;
			setCurrentPage(++currentPage);
		}
	};

	const handleModal = (product: TProduct[]): void => {
		setIsModal(true);
		setModalProductInfo(product);
	};

	const handleProductsById = (e: ChangeEvent<HTMLInputElement>): void => {
		setQuery('');

		if (!numberValidation(e.target.value)) return;
		setQuery(e.target.value);
	};

	const getProducts = async () => {
		setIsLoaded(true);

		try {
			const { data } = await axiosInstanceWithMapCaseMiddleware.get<TGetProductsResponse>(link);
			Array.isArray(data.data) ? setProducts(data.data) : setProducts([data.data]);
			setApiTotalPages(data.totalPages);
		} catch (err: any) {
			console.log(err);

			setErrorStatus(err.code);
		}

		setIsLoaded(false);
	};

	useEffect(() => {
		getProducts();
	}, [currentPage, query, currentPage]);

	return (
		<ProductContext.Provider
			value={{
				products,
				isLoaded,
				errorStatus,
				setErrorStatus,
				setQuery,
				query,
				handlePagination,
				currentPage,
				setCurrentPage,
				apiTotalPages,
				apiItInitialPageNumber,
				handleModal,
				setIsModal,
				isModal,
				modalProductInfo,
				handleProductsById,
				itemsPerPage,
				link,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
