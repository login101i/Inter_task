import { FC } from 'react';
import { ErrorContainer } from './Status404.component.styles';
import { ErrorMessage } from '../Table/Table.component.styles';
import { CustomIcon } from '../CustomIcon/CustomIcon.component';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useProductContext } from '../../appState/productsContext';

export const Status404Component: FC = () => {
	const { setQuery, setErrorStatus, query } = useProductContext();

	function handleGoBack() {
		setQuery('');
		setErrorStatus(null);
	}

	return (
		<ErrorContainer data-testid='test-404Status'>
			<ErrorMessage data-testid='test-errorMessage'>Product with id {query} do not exist </ErrorMessage>
			<CustomIcon
				Icon={ArrowRightAltIcon}
				onClick={handleGoBack}
				iconText='Try again'
				style={{ transform: 'rotate(180deg)' }}
				color={'black'}
			/>
		</ErrorContainer>
	);
};
