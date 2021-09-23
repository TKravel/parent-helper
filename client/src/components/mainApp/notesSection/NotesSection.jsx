import React, { useState } from 'react';
import TextInput from '../TextInput';
import Header from '../../Header';
import SaveButton from '../SaveButton';
import useSave from '../../../hooks/useSave';
import validate from './validateNotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NotesSection({
	sectionData,
	setMainState,
	onNoteChange,
	isEditing,
	cachedData,
	setCachedData,
}) {
	const sectionName = 'notes';
	const { errors, handleSubmit } = useSave(
		sectionName,
		sectionData,
		setMainState,
		cachedData,
		setCachedData,
		isEditing,
		validate
	);
	const [notesInput, setNotesInput] = useState('');

	if (errors) {
		console.log(errors);
	}

	function handleChange(e) {
		const inputData = e.target.value;
		setNotesInput(inputData);
	}

	function handleClick(e) {
		const section = 'notes';
		const data = notesInput[0].toUpperCase() + notesInput.slice(1);
		onNoteChange(section, data.trim());
		setNotesInput('');
		e.preventDefault();
	}

	function handleDelete(e) {
		const index = e.currentTarget.getAttribute('index');
		const section = 'noteItemDelete';
		const state = sectionData;
		const delItem = state.splice(index, 1);
		console.log('Item deleted: ', delItem);
		onNoteChange(section, state);
	}

	return (
		<div id='notesSection'>
			<Header headerText='Note tracker' />
			<div className='mainCardInput'>
				<div className='textInputContainer'>
					<TextInput
						label='Enter notes'
						name='notes'
						placeholder='Quick notes...'
						updateChange={handleChange}
						updateState={handleClick}
						stateData={notesInput}
					/>
					<ul className='listTextField'>
						{sectionData.length === 0 ? (
							<li>No data to show</li>
						) : (
							sectionData.map((note, index) => {
								return (
									<li key={index}>
										{note}
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
					name='notes'
					stateData={sectionData}
					isEditing={isEditing}
					cachedData={cachedData}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	);
}

export default NotesSection;
