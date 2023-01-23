import { inputNumberMaxValue, numberValidation } from './validators';

describe('validate input value correctly', () => {
	window.alert = jest.fn();
	const alertMock = jest.spyOn(window, 'alert').mockImplementation();

	test('validates string value correctly ', () => {
		const value = 'a';
		expect(numberValidation(value)).toBe(false);
		expect(alertMock).toHaveBeenCalledTimes(1);
	});
	test('checks if user provide id higher than length of products ', () => {
		const value = inputNumberMaxValue + 1;
		expect(numberValidation(value)).toBe(false);
		expect(alertMock).toHaveBeenCalledTimes(1);
	});
	test('validates number value correctly ', () => {
		const value = 1;
		expect(numberValidation(value)).toBe(true);
	});
});
