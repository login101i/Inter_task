import { FC } from 'react';
import { ErrorContainer } from '../Status404/Status404.component.styles';
import { ErrorMessage } from '../Table/Table.component.styles';
import { CustomIcon } from '../CustomIcon/CustomIcon.component';
import ReplayIcon from '@mui/icons-material/Replay';

export const Status504Component: FC = () => {
	function handleRetry() {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	}

	return (
		<ErrorContainer>
			<ErrorMessage>Please check your internet connection. </ErrorMessage>
			<CustomIcon Icon={ReplayIcon} onClick={handleRetry} iconText='retry' />
		</ErrorContainer>
	);
};
