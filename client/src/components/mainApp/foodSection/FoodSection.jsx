import React, { useState } from 'react';
import TextInput from '../TextInput';
import Header from '../../Header';
import SaveButton from '../SaveButton';
import useSave from '../../../hooks/useSave';
import validate from '../foodSection/validateFood';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FoodInput({
	sectionData,
	setMainState,
	onFoodChange,
	isEditing,
	cachedData,
	setCachedData,
}) {
	const sectionName = 'food';
	const { errors, handleSubmit } = useSave(
		sectionName,
		sectionData,
		setMainState,
		cachedData,
		setCachedData,
		isEditing,
		validate
	);
	const [foodInput, setFoodInput] = useState('');

	if (errors) {
		console.log(errors);
	}

	function handleChange(e) {
		const inputData = e.target.value;
		setFoodInput(inputData);
	}

	function handleClick(e) {
		const section = 'food';
		const data = foodInput[0].toUpperCase() + foodInput.slice(1);
		onFoodChange(section, data.trim());
		setFoodInput('');
		e.preventDefault();
	}

	function handleDelete(e) {
		e.preventDefault();
		const index = e.currentTarget.getAttribute('index');
		const section = 'foodItemDelete';
		const state = sectionData;
		const delItem = state.splice(index, 1);
		console.log('Item deleted: ', delItem);
		onFoodChange(section, state);
	}

	return (
		<div id='foodSection'>
			<Header headerText='Food tracker' />
			<div className='mainCardInput'>
				<div className='fSection'>
					<TextInput
						label='Enter food'
						name='foodInput'
						buttonID='addFoodItem'
						placeholder='Enter food here...'
						updateChange={handleChange}
						updateState={handleClick}
						stateData={foodInput}
					/>
					<ul className='listTextField'>
						{sectionData.length === 0 ? (
							<li>No data to show</li>
						) : (
							sectionData.map((food, index) => {
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
					stateData={sectionData}
					isEditing={isEditing}
					cachedData={cachedData}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	);
}

export default FoodInput;
