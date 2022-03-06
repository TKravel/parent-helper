export default function validate({ sectionData }) {
	let errors = {};

	if (sectionData < 0) {
		errors.poop = "Sorry, we can't remove poop!";
	}

	return errors;
}
