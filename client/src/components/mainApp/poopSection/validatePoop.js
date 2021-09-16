export default function validate({ sectionData }) {
	let errors = {};

	console.log(sectionData);
	if (sectionData < 0) {
		errors.poop = "Sorry, we can't remove poop!";
	}

	return errors;
}
