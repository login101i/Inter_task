import { FC } from 'react';
import { AppContainer } from '../../App.styles';
import { ErrorMessage } from '../Table/Table.component.styles';
import { CustomIcon } from '../CustomIcon/CustomIcon.component';
import ReplayIcon from '@mui/icons-material/Replay';
import { useProductContext } from '../../appState/productsContext';

export const Status504Component: FC = () => {
	const { setQuery, setErrorStatus, query } = useProductContext();

	function handleRetry() {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	}

	return (
		<AppContainer>
			<ErrorMessage>Please check your internet connection. </ErrorMessage>
			<CustomIcon Icon={ReplayIcon} onClick={handleRetry} iconText='retry' />
		</AppContainer>
	);
};
