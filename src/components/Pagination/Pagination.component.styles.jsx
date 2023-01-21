import styled from 'styled-components';

export const PaginationContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 10px;
	text-align: center;

	transition: 0.2s ease-in-out;
	&:hover {
		filter: brightness(85%);
	}
`;



export const ErrorMessage = styled.th`
	color: red;
`;
