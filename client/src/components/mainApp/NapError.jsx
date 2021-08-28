import React from 'react';

function NapError({ selectedNap, sectionData }) {
	const time = selectedNap;
	let errorMessage = '';

	switch (time) {
		case 'wakeUp':
			break;
		case 'firstNapStart':
			if (
				sectionData.firstNapStart !== '00:00' &&
				sectionData.firstNapStart < sectionData.wakeUp
			) {
				errorMessage = 'Must be after wake up';
			}
			break;
		case 'firstNapEnd':
			if (
				sectionData.firstNapEnd !== '00:00' &&
				sectionData.firstNapEnd < sectionData.firstNapStart
			) {
				errorMessage = 'Must be after nap start';
			}
			break;
		case 'secondNapStart':
			if (
				sectionData.secondNapStart !== '00:00' &&
				sectionData.secondNapStart < sectionData.firstNapEnd
			) {
				errorMessage = 'Must be after last nap ended';
			}
			break;
		case 'secondNapEnd':
			if (
				sectionData.secondNapEnd !== '00:00' &&
				sectionData.secondNapEnd < sectionData.secondNapStart
			) {
				errorMessage = 'Must be after nap start';
			}
			break;
		case 'bedTime':
			if (
				sectionData.bedTime !== '00:00' &&
				sectionData.bedTime < sectionData.secondNapEnd
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
