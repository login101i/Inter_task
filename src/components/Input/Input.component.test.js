import { render, screen, fireEvent } from '@testing-library/react';
import { InputComponent } from './Input.component';
import { ProductContext } from '../../appState/productsContext';

describe('Should render components', () => {
	const customRender = (component, { providerProps, ...renderOptions }) => {
		return render(<ProductContext.Provider {...providerProps}>{component}</ProductContext.Provider>, renderOptions);
	};
	test('it render InputComponent component', () => {
		render(<InputComponent />);
		const InputElement = screen.getByTestId('test-input');
		expect(InputElement).toBeInTheDocument();
	});

	test('it renders input value properly', async () => {
		const handleProductsById = jest.fn();
		const providerProps = {
			value: {},
		};

		customRender(<InputComponent onChange={handleProductsById} />, { providerProps });
		const InputElement = screen.getByTestId('test-input');

		expect(InputElement).toBeInTheDocument();
		fireEvent.click(InputElement);
		fireEvent.change(InputElement, { target: { value: 3 } });
		expect(InputElement.value).toBe('3');
	});
});
