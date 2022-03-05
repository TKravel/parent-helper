import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { incrementPoop, decrementPoop } from '../../../features/daysSlice';

export const Counter = ({ currentCount, isEditing }) => {
	const dispatch = useDispatch();
	const dayIndex = isEditing.dataIndex;
	const increaseCount = () => {
		dispatch(incrementPoop({ day: dayIndex }));
	};

	const decreaseCount = () => {
		if (currentCount === 0) {
			return;
		} else {
			dispatch(decrementPoop({ day: dayIndex }));
		}
	};

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
};
