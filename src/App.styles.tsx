import styled from 'styled-components';

const marginTop = '50px';

export const AppContainer = styled.div<{ isModal: boolean }>`
	display: ${props => (props.isModal ? 'none' : 'flex')};
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	height: calc(100vh - ${marginTop});
	width: 100vw;
	margin-top: ${marginTop};
	overflow: hidden;
`;
