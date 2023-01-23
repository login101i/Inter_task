import { FC } from 'react';
import { ModalWrapper, ModalContainer, CloseIcon, ModalValue } from './Modal.component.styles';
import { CustomIcon } from '../CustomIcon/CustomIcon.component';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useProductContext } from '../../appState/productsContext';

export const ModalComponent: FC = () => {
	const { isModal, modalProductInfo: productInfo, setIsModal } = useProductContext();

	return (
		<>
			{isModal && (
				<ModalWrapper data-testid='test-modalContainer'>
					{productInfo.map(productInfo => (
						<ModalContainer key={productInfo.id} backgroundColor={productInfo.color}>
							<ModalValue>Id: {productInfo.id}</ModalValue>
							<ModalValue>Name: {productInfo.name}</ModalValue>
							<ModalValue>Year: {productInfo.year}</ModalValue>
							<ModalValue>Color: {productInfo.color}</ModalValue>
							<ModalValue data-testid='test-modalValue'>PantoneValue: {productInfo.pantoneValue}</ModalValue>
							<CloseIcon onClick={() => setIsModal(false)}>
								<CustomIcon Icon={CloseOutlinedIcon} color='white' onClick={() => setIsModal(false)} />
							</CloseIcon>
						</ModalContainer>
					))}
				</ModalWrapper>
			)}
		</>
	);
};
