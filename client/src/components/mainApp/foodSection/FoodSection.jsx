import React, { useState } from 'react';
import { TextInput } from '../TextInput';
import { SectionHeader } from '../../SectionHeader';
import SaveButton from '../SaveButton';
import useSave from '../../../hooks/useSave';
import validate from '../foodSection/validateFood';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { addFood, removeFood } from '../../../features/daysSlice';

export const FoodSection = ({ isEditing }) => {
	const sectionName = 'food';
	const day = isEditing.dataIndex;
	const foodList = useSelector((state) => state.days.data.arr[day].food);
	const dispatch = useDispatch();
	const { errors, handleSubmit } = useSave(
		sectionName,
		foodList,
		isEditing,
		validate
	);
	const [foodInput, setFoodInput] = useState('');
	const [hasBeenEdited, setHasBeenEdited] = useState(0);

	// if (errors) {
	// 	console.log(errors);
	// }

	const handleChange = (e) => {
		const inputData = e.target.value;
		setFoodInput(inputData);
	};

	const handleClick = () => {
		const newItem = foodInput[0].toUpperCase() + foodInput.slice(1);
		dispatch(addFood({ day: day, item: newItem }));
		hasBeenEdited < 1 && setHasBeenEdited(1);
		setFoodInput('');
	};

	const handleDelete = (e) => {
		const itemToDelete = e.currentTarget.getAttribute('index');
		dispatch(removeFood({ day: day, item: itemToDelete }));
	};

	return (
		<div id='foodSection'>
			<SectionHeader headerText='Food tracker' />
			<div className='mainCardInput'>
				<div className='fSection'>
					<TextInput
						label='Enter food'
						name='foodInput'
						placeholder='Enter food here...'
						updateChange={handleChange}
						updateState={handleClick}
						stateData={foodInput}
					/>
					<ul className='listTextField'>
						{foodList.length === 0 ? (
							<li>No data to show</li>
						) : (
							foodList.map((food, index) => {
								return (
									<li key={index} index={index}>
										{food}
										<button
											className='deleteListItem'
											index={index}
											onClick={handleDelete}
										>
											<FontAwesomeIcon icon='times' />
										</button>
									</li>
								);
							})
						)}
					</ul>
				</div>
				<SaveButton
					name='food'
					isEditing={isEditing}
					disabledStatus={hasBeenEdited}
					setDisabledStatus={setHasBeenEdited}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	);
};
