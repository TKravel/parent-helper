// TODO: Break data into breakfast, lunch, dinner, snacks.
import React, { useState } from 'react';
import TextInput from '../TextInput';
import Header from '../../Header';
import SaveButton from '../SaveButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FoodInput({
	foodData,
	onFoodChange,
	isEditing,
	tableRefresh,
	cachedData,
}) {
	const [foodInput, setFoodInput] = useState('');

	function handleChange(e) {
		const inputData = e.target.value;
		setFoodInput(inputData);
	}

	function handleClick(e) {
		const section = 'food';
		onFoodChange(section, foodInput);
		setFoodInput('');
		e.preventDefault();
	}

	function handleDelete(e) {
		e.preventDefault();
		const index = e.currentTarget.getAttribute('index');
		const section = 'foodItemDelete';
		const state = foodData;
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
						{foodData.length === 0 ? (
							<li>No data to show</li>
						) : (
							foodData.map((food, index) => {
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
					stateData={foodData}
					isEditing={isEditing}
					tableRefresh={tableRefresh}
					cachedData={cachedData}
				/>
			</div>
		</div>
	);
}

export default FoodInput;
