import React, { useState } from 'react';
import TextInput from '../TextInput';
import Header from '../../Header';
import SaveButton from '../SaveButton';
import useSave from '../../../hooks/useSave';
import validate from './validateNotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, removeNote } from '../../../features/daysSlice';

function NotesSection({ isEditing }) {
	const sectionName = 'notes';
	const dispatch = useDispatch();
	const noteData = useSelector((state) => state.days.data.arr[0].notes);
	const { errors, handleSubmit } = useSave(
		sectionName,
		noteData,
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
		dispatch(addNote(data.trim()));
		setNotesInput('');
		e.preventDefault();
	}

	function handleDelete(e) {
		const idxToDelete = e.currentTarget.getAttribute('index');
		dispatch(removeNote(idxToDelete));
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
					isEditing={isEditing}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	);
}

export default NotesSection;
