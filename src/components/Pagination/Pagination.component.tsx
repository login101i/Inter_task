import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaginationContainer } from './Pagination.component.styles';
import { CustomIcon } from '../CustomIcon/CustomIcon.component';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useProductContext } from '../../appState/productsContext';

export const Pagination: FC = () => {
	let { currentPage, handlePagination, apiTotalPages, apiItInitialPageNumber, query } = useProductContext();
	const directionLeft = 'left';
	const directionRight = 'right';
	const navigate = useNavigate();

	return (
		<>
			{!query && (
				<PaginationContainer>
					<CustomIcon
						Icon={ArrowRightAltIcon}
						style={{ transform: 'rotate(180deg)' }}
						onClick={() => {
							handlePagination(directionLeft);
							if (currentPage !== apiItInitialPageNumber) navigate(`/products/page/${--currentPage}`);
						}}
						color={currentPage === apiItInitialPageNumber ? '#C8C8C8' : 'black'}
						iconText='previous'
					/>
					<CustomIcon
						Icon={ArrowRightAltIcon}
						onClick={() => {
							handlePagination(directionRight);
							if (currentPage !== apiTotalPages) navigate(`/products/page/${++currentPage}`);
						}}
						iconText='next'
						color={currentPage === apiTotalPages ? '#C8C8C8' : 'black'}
					/>
				</PaginationContainer>
			)}
		</>
	);
};
