export const totalProductsLength: number = 12;
export const inputNumberMaxValue = 999;
export const NonNumberInputValueErrorMessage: string = 'Please provide only numeric value';
export const NUmberAutOffScaleErrorMessage: string = `Please provide id value between 0 and ${totalProductsLength}
`;
export function numberValidation(query: any) {
	if (isNaN(query)) {
		alert(NonNumberInputValueErrorMessage);
		return false;
	} else if (query > inputNumberMaxValue) {
		alert(NUmberAutOffScaleErrorMessage);
		return false;
	} else {
		return true;
	}
}
