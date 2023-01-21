import { FC } from 'react';
import { Table, TableBody, TableHeading, TableRow, TableCell, ErrorMessage, LoadingIndicator } from './Table.component.styles';
import { useProductContext } from '../../appState/productsContext';

export const TableComponent: FC = () => {
	const { products, isLoaded, query, handleModal, error } = useProductContext();
	const filteredProducts = query ? products.filter(product => product.id === Number(query)) : products;

	if (error) {
		return <ErrorMessage>{error} </ErrorMessage>;
	}

	if (!filteredProducts.length) {
		return <ErrorMessage>`No Product with this id = {query} on this page</ErrorMessage>;
	}

	return isLoaded ? (
		<LoadingIndicator>Loading...</LoadingIndicator>
	) : (
		<Table>
			<TableBody>
				<TableRow>
					<TableHeading>Name</TableHeading>
					<TableHeading>PantoneValue</TableHeading>
					<TableHeading>Year</TableHeading>
				</TableRow>
				{filteredProducts.map(product => (
					<TableRow key={product.id} backgroundColor={product.color} onClick={() => handleModal([product])}>
						<TableCell>{product.id}</TableCell>
						<TableCell>{product.name}</TableCell>
						<TableCell>{product.year}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
