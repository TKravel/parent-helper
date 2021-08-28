import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Counter({ currentCount, onPoopChange }) {
	const section = 'poop';

	function increaseCount() {
		const newCount = currentCount + 1;
		onPoopChange(section, newCount);
	}

	function decreaseCount() {
		if (currentCount === 0) {
			return;
		} else {
			const newCount = currentCount - 1;
			onPoopChange(section, newCount);
		}
	}

	return (
		<>
			<p>Change count</p>
			<button className='addSubtractButtons' onClick={decreaseCount}>
				<FontAwesomeIcon icon='minus' />
			</button>
			<button className='addSubtractButtons' onClick={increaseCount}>
				<FontAwesomeIcon icon='plus' />
			</button>
		</>
	);
}

export default Counter;
