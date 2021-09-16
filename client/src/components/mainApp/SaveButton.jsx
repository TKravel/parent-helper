import React, { useEffect, useState } from 'react';
// import { UserContext } from '../../hooks/UserContext';

function SaveButton({ name, stateData, isEditing, cachedData, handleSubmit }) {
	// const { user } = useContext(UserContext);

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
				// console.log('same ');
			} else {
				// console.log('dif');
				// console.log(storedData, stateData);
				setIsDisabled(false);
			}
		}
	}, [[stateData]]);

	// function handleSave(e) {
	// 	e.preventDefault();
	// 	let userToken;
	// 	if (user) {
	// 		userToken = user.auth;
	// 	}
	// 	const data = {
	// 		name: [name],
	// 		data: stateData,
	// 	};
	// 	fetch('api/userInputSave', {
	// 		method: 'POST',
	// 		headers: {
	// 			authorization: userToken,
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(data),
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log('Item saved:', data);
	// 			tableRefresh();
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error:', error);
	// 		});
	// }

	// function handleEdit(e) {
	// 	e.preventDefault();
	// 	let userToken;
	// 	if (user) {
	// 		userToken = user.auth;
	// 	}
	// 	const data = {
	// 		name: [name],
	// 		data: stateData,
	// 		id: isEditing.id,
	// 	};

	// 	fetch('api/userInputEdit', {
	// 		method: 'POST',
	// 		headers: {
	// 			authorization: userToken,
	// 			'Content-Type': 'application/json; charset=utf-8',
	// 		},
	// 		body: JSON.stringify(data),
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			if (data) {
	// 				tableRefresh();
	// 			} else {
	// 				console.log('no data');
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error:', error);
	// 		});
	// }

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
