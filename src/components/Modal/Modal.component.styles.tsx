import styled from 'styled-components';
const paddingTop = '100px';

export const ModalWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding-top: ${paddingTop};
	width: 100vw;
	height: calc(100vw -${paddingTop});
	color: white;
	background-color: white;
	border-radius: 5px;
`;

export const ModalContainer = styled.div<{ backgroundColor: string }>`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	position: relative;
	padding-left: 20px;
	font-weight: 600;

	width: 400px;
	max-width: 90vw;
	height: 200px;
	background-color: ${props => props.backgroundColor};
	color: white;
	border-radius: 5px;

	-webkit-box-shadow: 1px 12px 28px -5px rgba(97, 98, 116, 1);
	-moz-box-shadow: 1px 12px 28px -5px rgba(97, 98, 116, 1);
	box-shadow: 1px 12px 28px -5px rgba(97, 98, 116, 1);
`;

export const ModalValue = styled.div`
	font-size: 18px;
	margin: 2px 0px;
`;
export const CloseIcon = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	color: white;
	font-size: 30px;
	cursor: pointer;
`;
