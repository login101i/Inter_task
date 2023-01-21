import { FC } from 'react';
import { PaginationContainer, ErrorMessage } from './Pagination.component.styles';
import { CustomIcon } from '../CustomIcon/CustomIcon.component';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useProductContext } from '../../appState/productsContext';

export const Pagination: FC = () => {
	const { currentPage, handlePagination, apiTotalPages, apiItInitialPageNumber, query, error } = useProductContext();
	const directionLeft = 'left';
	const directionRight = 'right';
	return (
		<>
			{error ? (
				<ErrorMessage>{error}</ErrorMessage>
			) : (
				!query && (
					<PaginationContainer>
						<CustomIcon
							Icon={ArrowRightAltIcon}
							style={{ transform: 'rotate(180deg)' }}
							onClick={() => handlePagination(directionLeft)}
							color={currentPage === apiItInitialPageNumber ? '#C8C8C8' : 'black'}
							iconText='previous'
						/>
						<CustomIcon
							Icon={ArrowRightAltIcon}
							onClick={() => handlePagination(directionRight)}
							iconText='next'
							color={currentPage === apiTotalPages ? '#C8C8C8' : 'black'}
						/>
					</PaginationContainer>
				)
			)}
		</>
	);
};
