const NonNumberInputValueErrorMessage: string = 'Please provide only numeric value';

export function numberValidation(query: any) {
	if (isNaN(query)) {
		alert(NonNumberInputValueErrorMessage);
		return false;
	} else {
		return true;
	}
}
