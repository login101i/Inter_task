import { FC, useRef } from 'react';
import { InputContainer } from './Input.component.styles';
import { useProductContext } from '../../appState/productsContext';

export const InputComponent: FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { handleProducts, query } = useProductContext();
	const inputPlaceholderText = 'Filter by id';

	return <InputContainer type='text' onChange={handleProducts} ref={inputRef} value={query} placeholder={inputPlaceholderText} />;
};
