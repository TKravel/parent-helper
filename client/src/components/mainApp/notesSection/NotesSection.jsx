import React, { useState } from 'react';
import { TextInput } from '../TextInput';
import { SectionHeader } from '../../SectionHeader';
import SaveButton from '../SaveButton';
import useSave from '../../../hooks/useSave';
import validate from './validateNotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, removeNote } from '../../../features/daysSlice';

export const NotesSection = ({ isEditing }) => {
	const sectionName = 'notes';
	const dispatch = useDispatch();
	const day = isEditing.dataIndex;
	const noteData = useSelector((state) => state.days.data.arr[day].notes);
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

	const handleChange = (e) => {
		const inputData = e.target.value;
		setNotesInput(inputData);
	};

	const handleClick = (e) => {
		const section = 'notes';
		const data = notesInput[0].toUpperCase() + notesInput.slice(1);
		dispatch(addNote(data.trim()));
		setNotesInput('');
		e.preventDefault();
	};

	const handleDelete = (e) => {
		const idxToDelete = e.currentTarget.getAttribute('index');
		dispatch(removeNote(idxToDelete));
	};

	return (
		<div id='notesSection'>
			<SectionHeader headerText='Note tracker' />
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
};

export default NotesSection;
