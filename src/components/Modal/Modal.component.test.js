import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import App from '../../App';
import { ProductContext } from '../../appState/productsContext';

describe('Should render Modal component', () => {
	const customRender = (component, { providerProps, ...renderOptions }) => {
		return render(<ProductContext.Provider {...providerProps}>{component}</ProductContext.Provider>, renderOptions);
	};

	test('it shows Modal component when user click on product record', () => {
		const providerProps = {
			value: {
				products: [{ id: 1, name: 'cerulean', year: 2000 }],
				setCurrentPage: () => {},
				handleModal: () => {},
				isLoading: false,
				isModal: true,
				modalProductInfo: [{ id: 1, name: 'cerulean', year: 2000, color: 'green', pantoneValue: 'xyz' }],
			},
		};
		customRender(<App />, { providerProps });
		const TableCellElement = screen.getByTestId('test-tableRow');
		const ModalContainerComponent = screen.getByTestId('test-modalContainer');

		expect(TableCellElement).not.toBeVisible();
		fireEvent.click(TableCellElement);
		expect(ModalContainerComponent).toBeVisible();
	});
});
