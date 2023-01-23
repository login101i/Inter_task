import styled from 'styled-components';

export const Table = styled.table`
	width: 400px;
	height: 20px;
	outline: none;
	font-size: 18px;

	@media (max-width: 400px) {
		width: 90vw;
	}
`;
export const TableBody = styled.tbody``;

export const TableRow = styled.tr<{ backgroundColor?: string }>`
	width: 400px;
	height: 20px;
	border-bottom: 1px solid grey;
	outline: none;
	background-color: ${props => props.backgroundColor};
	cursor: pointer;
	text-align: left;
`;

export const TableCell = styled.td`
	color: white;
	font-weight: 600;
	padding: 5px;
	&::first-letter {
		text-transform: upperCase;
	}
`;

export const TableHeading = styled.th`
	padding-left: 4px;
`;

export const ErrorMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: red;
	font-size: 18px;
	font-weight: 600;
	text-align: center;
`;

export const LoadingIndicator = styled.div`
	color: red;
	font-size: 18px;
	font-weight: 600;
`;
