import { FC, useRef } from 'react';
import { InputContainer } from './Input.component.styles';
import { useProductContext } from '../../appState/productsContext';

export const InputComponent: FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { handleProductsById, query } = useProductContext();
	const inputPlaceholderText = 'Filter all products by id';

	return (
		<InputContainer
			type='text'
			onChange={handleProductsById}
			ref={inputRef}
			value={query}
			placeholder={inputPlaceholderText}
			data-testid='test-input'
		/>
	);
};
