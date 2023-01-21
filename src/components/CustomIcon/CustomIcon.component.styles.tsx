import styled from 'styled-components';

export const IconContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 22px;
	margin: 0px 10px;
	color: ${props => (props.color ? props.color : 'grey')};
	text-align: center;
	cursor: pointer;
	user-select: none;

	transition: 0.2s ease-in-out;
	&:hover {
		filter: brightness(85%);
	}
`;
export const IconText = styled.div<{ color: string }>`
	color: ${props => props.color};
`;
