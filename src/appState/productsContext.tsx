import { createContext, useEffect, useState, FC, useContext, ChangeEvent } from 'react';
import { axiosInstanceWithMapCaseMiddleware } from '../helpers/request';
import { TInitialState, TProduct, TGetProductsResponse, ProductContextProps } from '../types/appTypes';
import { numberValidation } from '../helpers/validators';

const INITIAL_STATE: TInitialState = {
	products: [],
	isLoaded: false,
	error: null,
	query: '',
	setQuery: () => {},
	handlePagination: () => {},
	currentPage: 1,
	apiTotalPages: 3,
	apiItInitialPageNumber: 1,
	handleModal: () => {},
	setIsModal: () => {},
	isModal: false,
	modalProductInfo: [],
	handleProducts: () => {},
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
	const [error, setError] = useState<string>('');
	const [query, setQuery] = useState<string>('');
	let [currentPage, setCurrentPage] = useState<number>(1);

	const itemsPerPage: number = 5;
	const apiItInitialPageNumber: number = 1;
	const directionLeft: string = 'left';
	const directionRight: string = 'right';

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

	const handleProducts = (e: ChangeEvent<HTMLInputElement>): void => {
		setQuery('');

		if (!numberValidation(e.target.value)) return;
		setQuery(e.target.value);
	};

	const getProducts = async () => {
		setIsLoaded(true);
		try {
			const { data } = await axiosInstanceWithMapCaseMiddleware.get<TGetProductsResponse>(
				`/products?page=${currentPage}&per_page=${itemsPerPage}`,
			);
			setProducts(data.data);
			setApiTotalPages(data.totalPages);
		} catch (err: any) {
			setError(err.message);
		}
		setIsLoaded(false);
	};

	useEffect(() => {
		getProducts();
	}, [currentPage]);

	return (
		<ProductContext.Provider
			value={{
				products,
				isLoaded,
				error,
				setQuery,
				query,
				handlePagination,
				currentPage,
				apiTotalPages,
				apiItInitialPageNumber,
				handleModal,
				setIsModal,
				isModal,
				modalProductInfo,
				handleProducts,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
