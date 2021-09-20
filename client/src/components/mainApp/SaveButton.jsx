import React, { useEffect, useState } from 'react';

function SaveButton({ name, stateData, isEditing, cachedData, handleSubmit }) {
	const [isDisabled, setIsDisabled] = useState(true);

	useEffect(() => {
		if (cachedData.length !== 0) {
			const indexNum = parseInt(isEditing.cacheDbDataIndex);
			let cachedState = cachedData.filter(
				(item, index) => index === indexNum
			);
			let storedData = cachedState[0][name];
			if (JSON.stringify(stateData) === JSON.stringify(storedData)) {
				setIsDisabled(true);
			} else {
				setIsDisabled(false);
			}
		}
	}, [[stateData]]);

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
