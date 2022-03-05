const validate = (sectionData) => {
	let errors = {};

	console.log('validating');

	// Nap 1 start
	if (
		sectionData.nap1Start !== '00:00' &&
		sectionData.nap1Start < sectionData.wakeUp
	) {
		errors.nap1Start = 'Must be after wake up';
	}
	// Nap 1 end
	if (
		sectionData.nap1End !== '00:00' &&
		sectionData.nap1End < sectionData.nap1Start
	) {
		errors.nap1End = 'Must be after nap start';
	}
	// Nap 2 start
	if (
		sectionData.nap2Start !== '00:00' &&
		sectionData.nap2Start < sectionData.nap1End
	) {
		errors.nap2Start = 'Must be after last nap ended';
	}
	// Nap 2 end
	if (
		sectionData.nap2End !== '00:00' &&
		sectionData.nap2End < sectionData.nap2Start
	) {
		errors.nap2End = 'Must be after nap start';
	}
	// Bed time
	if (
		sectionData.bedTime !== '00:00' &&
		sectionData.bedTime < sectionData.nap2End
	) {
		errors.bedTime = 'Must be after last nap';
	}

	console.log('test', errors);

	return errors;
};

export default validate;
