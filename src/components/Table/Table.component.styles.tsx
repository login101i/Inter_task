import styled from 'styled-components';

export const Table = styled.table`
	width: 400px;
	max-width: 90vw;
	height: 20px;
	border-bottom: 1px solid grey;
	outline: none;
	font-size: 20px;
`;
export const TableBody = styled.tbody``;

export const TableRow = styled.tr<{ backgroundColor?: string }>`
	width: 400px;
	height: 20px;
	border-bottom: 1px solid grey;
	outline: none;
	font-size: 20px;
	background-color: ${props => props.backgroundColor};
	cursor: pointer;
`;

export const TableCell = styled.td`
	color: white;
	font-weight: 600;
	padding: 4px;
`;

export const TableHeading = styled.th``;

export const ErrorMessage = styled.div`
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
