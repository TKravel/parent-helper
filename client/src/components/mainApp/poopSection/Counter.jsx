import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { incrementPoop, decrementPoop } from '../../../features/daysSlice';

function Counter({ currentCount }) {
	const dispatch = useDispatch();
	function increaseCount() {
		console.log('clicked');
		dispatch(incrementPoop());
	}

	function decreaseCount() {
		if (currentCount === 0) {
			return;
		} else {
			dispatch(decrementPoop());
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
