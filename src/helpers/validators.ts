const NonNumberInputValueErrorMessage: string = 'Please provide only numeric value';
const NUmberAutOffScaleErrorMessage: string = 'Please provide value between 0 and 9999';

export function numberValidation(query: any) {
	if (isNaN(query)) {
		alert(NonNumberInputValueErrorMessage);
		return false;
	} else if (query.length > 4) {
		alert(NUmberAutOffScaleErrorMessage);
	} else {
		return true;
	}
}
