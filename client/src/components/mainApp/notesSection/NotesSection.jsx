import React, { useState } from 'react';
import TextInput from '../TextInput';
import Header from '../../Header';
import SaveButton from '../SaveButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NotesSection({
	noteData,
	onNoteChange,
	isEditing,
	tableRefresh,
	cachedData,
}) {
	const [notesInput, setNotesInput] = useState('');

	function handleChange(e) {
		const inputData = e.target.value;
		setNotesInput(inputData);
	}

	function handleClick(e) {
		const section = 'notes';
		onNoteChange(section, notesInput.trim());
		setNotesInput('');
		e.preventDefault();
	}

	function handleDelete(e) {
		const index = e.currentTarget.getAttribute('index');
		const section = 'noteItemDelete';
		const state = noteData;
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
						{noteData.length === 0 ? (
							<li>No data to show</li>
						) : (
							noteData.map((note, index) => {
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
					stateData={noteData}
					isEditing={isEditing}
					tableRefresh={tableRefresh}
					cachedData={cachedData}
				/>
			</div>
		</div>
	);
}

export default NotesSection;
