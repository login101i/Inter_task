import { FC, useEffect } from 'react';
import { Table, TableBody, TableHeading, TableRow, TableCell, LoadingIndicator } from './Table.component.styles';
import { useProductContext } from '../../appState/productsContext';
import { useParams } from 'react-router-dom';

export const TableComponent: FC = () => {
	const { products, isLoaded, handleModal, setCurrentPage } = useProductContext();

	let currentPage = useParams().currentPage;

	useEffect(() => {
		setCurrentPage(Number(currentPage));
	}, []);

	return isLoaded ? (
		<LoadingIndicator>Loading...</LoadingIndicator>
	) : (
		<Table>
			<TableBody>
				<TableRow>
					<TableHeading>Id</TableHeading>
					<TableHeading>Name</TableHeading>
					<TableHeading>Year</TableHeading>
				</TableRow>
				{products.map(product => (
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
