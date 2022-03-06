export default function validate({ sectionData }) {
	let errors = {};

	if (!sectionData) {
		errors.error = 'Input required';
	}
	return errors;
}
