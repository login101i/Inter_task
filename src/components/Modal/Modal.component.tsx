import { FC } from 'react';
import { Wrapper, ModalContainer, CloseIcon } from './Modal.component.styles';
import { CustomIcon } from '../CustomIcon/CustomIcon.component';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useProductContext } from '../../appState/productsContext';

export const ModalComponent: FC = () => {
	const { isModal, modalProductInfo: productInfo, setIsModal } = useProductContext();

	return (
		<>
			{isModal && (
				<Wrapper>
					{productInfo.map(productInfo => (
						<ModalContainer key={productInfo.id} backgroundColor={productInfo.color}>
							<div>Id: {productInfo.id}</div>
							<div>Name: {productInfo.name}</div>
							<div>Year: {productInfo.year}</div>
							<div>Color: {productInfo.color}</div>
							<div>PantoneValue: {productInfo.pantoneValue}</div>
							<CloseIcon onClick={() => setIsModal(false)}>
								<CustomIcon Icon={CloseOutlinedIcon} color='white' onClick={() => setIsModal(false)} />
							</CloseIcon>
						</ModalContainer>
					))}
				</Wrapper>
			)}
		</>
	);
};
