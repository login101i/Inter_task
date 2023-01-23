import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Pagination, ModalComponent, InputComponent, TableComponent, Status404Component, Status504Component } from './components';
import { AppContainer } from './App.styles';
import { useProductContext } from './appState/productsContext';

const App: FC = () => {
	const { errorStatus } = useProductContext();

	if (errorStatus === 'ERR_BAD_REQUEST') return <Status404Component />;
	if (errorStatus === 'ERR_NETWORK') return <Status504Component />;

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate replace to='/products/page/1' />} />
				<Route
					path='/products/page/:currentPage'
					element={
						<>
							<AppContainer>
								<InputComponent />
								<TableComponent />
								<Pagination />
							</AppContainer>
							<ModalComponent />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
