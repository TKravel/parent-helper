import React, { useEffect, useState } from 'react';

function SaveButton({ isEditing, disabledStatus, handleSubmit }) {
	const [isDisabled, setIsDisabled] = useState(true);

	// Set disabled button state by comparing appState to db data for changes
	useEffect(() => {
		disabledStatus === 0 ? setIsDisabled(true) : setIsDisabled(false);
	}, [disabledStatus]);

	return (
		<>
			{!isEditing.status ? (
				<button
					name='save'
					type='submit'
					disabled={isDisabled ? true : false}
					onClick={handleSubmit}
					className='saveButton'
				>
					{isDisabled ? 'Up to date' : 'Save'}
				</button>
			) : (
				<button
					name='edit'
					type='submit'
					disabled={isDisabled ? true : false}
					onClick={handleSubmit}
					className='saveButton'
				>
					{isDisabled ? 'Up to date' : 'Edit'}
				</button>
			)}
		</>
	);
}

export default SaveButton;
