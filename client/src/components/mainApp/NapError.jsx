import React from 'react';

function NapError({ selectedNap, sectionData }) {
	const time = selectedNap;
	let errorMessage = '';

	switch (time) {
		case 'wakeUp':
			break;
		case 'nap1Start':
			if (
				sectionData.nap1Start !== '00:00' &&
				sectionData.nap1Start < sectionData.wakeUp
			) {
				errorMessage = 'Must be after wake up';
			}
			break;
		case 'nap1End':
			if (
				sectionData.nap1End !== '00:00' &&
				sectionData.nap1End < sectionData.nap1Start
			) {
				errorMessage = 'Must be after nap start';
			}
			break;
		case 'nap2Start':
			if (
				sectionData.nap1Start !== '00:00' &&
				sectionData.nap2Start < sectionData.nap1End
			) {
				errorMessage = 'Must be after last nap ended';
			}
			break;
		case 'nap2End':
			if (
				sectionData.nap2End !== '00:00' &&
				sectionData.nap2End < sectionData.nap2Start
			) {
				errorMessage = 'Must be after nap start';
			}
			break;
		case 'bedTime':
			if (
				sectionData.bedTime !== '00:00' &&
				sectionData.bedTime < sectionData.nap2End
			) {
				errorMessage = 'Must be after last nap';
			}
			break;
		default:
			console.log('error');
			break;
	}
	return <p className='errorMessage'>{errorMessage}</p>;
}

export default NapError;
