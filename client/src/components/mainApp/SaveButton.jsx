import React, { useEffect, useState } from 'react';

function SaveButton({ name, stateData, isEditing, tableRefresh, cachedData }) {
	function handleSave(e) {
		e.preventDefault();
		const data = {
			name: [name],
			data: stateData,
		};
		fetch('api/userInputSave', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				tableRefresh();
				console.log('Success:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	function handleEdit(e) {
		e.preventDefault();
		const data = {
			name: [name],
			data: stateData,
			id: isEditing.id,
		};
		fetch('api/userInputEdit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
				tableRefresh();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
	const [isDisabled, setIsDisabled] = useState(true);

	useEffect(() => {
		if (cachedData.length !== 0) {
			const indexNum = parseInt(isEditing.cacheDbDataIndex);
			let cachedState = cachedData.filter(
				(item, index) => index === indexNum
			);
			let sectionData = cachedState[0][name];
			if (JSON.stringify(stateData) === JSON.stringify(sectionData)) {
				setIsDisabled(true);
			} else {
				setIsDisabled(false);
			}
		}
	}, [cachedData][stateData]);

	return (
		<>
			{!isEditing.status ? (
				<button
					type='submit'
					disabled={isDisabled ? true : false}
					onClick={handleSave}
					className='saveButton'
				>
					{isDisabled ? 'Up to date' : 'Save'}
				</button>
			) : (
				<button
					type='submit'
					disabled={isDisabled ? true : false}
					onClick={handleEdit}
					className='saveButton'
				>
					{isDisabled ? 'Up to date' : 'Edit'}
				</button>
			)}
		</>
	);
}

export default SaveButton;
