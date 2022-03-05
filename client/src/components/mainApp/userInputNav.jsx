import React from 'react';
import { displayDate, getCurrentDate } from '../../dateTimeHelpers';
import { useSelector } from 'react-redux';

function UserInputNav({ updateDisplay, isEditing, closeEditer }) {
	const dateOfDay = useSelector((state) => state.days.data.arr[0].date);
	// Input section display
	function handleClick(e) {
		e.preventDefault();
		const selection = e.target.name;

		switch (selection) {
			case 'foodSection':
				updateDisplay({
					foodSection: true,
					sleepSection: false,
					pottySection: false,
					notesSection: false,
				});
				break;
			case 'sleepSection':
				updateDisplay({
					foodSection: false,
					sleepSection: true,
					pottySection: false,
					notesSection: false,
				});
				break;
			case 'pottySection':
				updateDisplay({
					foodSection: false,
					sleepSection: false,
					pottySection: true,
					notesSection: false,
				});
				break;
			case 'notesSection':
				updateDisplay({
					foodSection: false,
					sleepSection: false,
					pottySection: false,
					notesSection: true,
				});
				break;
			default:
				console.error();
		}
	}
	// Return to editing todays data
	function handleClose() {
		closeEditer();
	}
	return (
		<div className='userInputNav'>
			{isEditing.status === false ? (
				<p id='currentDate'>{getCurrentDate()}</p>
			) : (
				<>
					<p id='currentDate'>Editing: {displayDate(dateOfDay)}</p>
					<button id='closeEditerButton' onClick={handleClose}>
						Return to today
					</button>
				</>
			)}
			<button name='foodSection' onClick={handleClick}>
				Food
			</button>
			<button name='sleepSection' onClick={handleClick}>
				Sleep
			</button>
			<button name='pottySection' onClick={handleClick}>
				Poop
			</button>
			<button name='notesSection' onClick={handleClick}>
				Notes
			</button>
		</div>
	);
}

export default UserInputNav;
