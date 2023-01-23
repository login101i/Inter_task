import styled from 'styled-components';

export const IconContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 22px;
	margin: 0px 10px;
	text-align: center;
	cursor: ${props => (props.color === 'black' ? 'pointer' : '')};
	user-select: none;
`;
export const IconText = styled.div<{ color: string }>`
	color: ${props => props.color};
`;
