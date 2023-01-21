import { FC } from 'react';
import { Pagination, ModalComponent, InputComponent, TableComponent } from './components';
import { AppContainer } from './App.styles';
import { ProductContextProvider } from './appState/productsContext';

const App: FC = () => {

	return (
		<ProductContextProvider>
			<AppContainer>
				<InputComponent />
				<TableComponent />
				<Pagination />
			</AppContainer>
			<ModalComponent />
		</ProductContextProvider>
	);
};

export default App;
