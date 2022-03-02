import React, { useState } from 'react';
import TextInput from '../TextInput';
import Header from '../../Header';
import SaveButton from '../SaveButton';
import useSave from '../../../hooks/useSave';
import validate from '../foodSection/validateFood';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { addFood, removeFood } from '../../../features/daysSlice';

function FoodInput({ isEditing }) {
	const sectionName = 'food';
	const foodList = useSelector((state) => state.days.data.arr[0].food);
	console.log(foodList);
	const dispatch = useDispatch();
	// const { errors, handleSubmit } = useSave(
	// 	sectionName,
	// 	sectionData,
	// 	setMainState,
	// 	cachedData,
	// 	setCachedData,
	// 	isEditing,
	// 	validate
	// );
	const [foodInput, setFoodInput] = useState('');
	const [hasBeenEdited, setHasBeenEdited] = useState(0);

	// if (errors) {
	// 	console.log(errors);
	// }

	function handleChange(e) {
		const inputData = e.target.value;
		setFoodInput(inputData);
	}

	function handleClick() {
		const newItem = foodInput[0].toUpperCase() + foodInput.slice(1);
		dispatch(addFood(newItem));
		hasBeenEdited < 1 && setHasBeenEdited(1);
		setFoodInput('');
	}

	function handleDelete(e) {
		const itemToDelete = e.currentTarget.getAttribute('index');
		dispatch(removeFood(itemToDelete));
	}

	return (
		<div id='foodSection'>
			<Header headerText='Food tracker' />
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
						{foodList === 0 ? (
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
					// handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	);
}

export default FoodInput;
