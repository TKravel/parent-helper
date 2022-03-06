export default function validate({ sectionData }) {
	let errors = {};

	if (sectionData.length < 1) {
		errors.error = 'Input required';
	}
	return errors;
}
