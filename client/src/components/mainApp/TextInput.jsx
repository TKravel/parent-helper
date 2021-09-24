import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TextInput({
	label,
	name,
	placeholder,
	updateChange,
	updateState,
	stateData,
}) {
	const [error, setError] = useState({
		error: false,
		message: 'Input required',
	});

	function validateInput(e) {
		if (stateData === '') {
			setError((prevValue) => {
				return {
					error: true,
					message: prevValue.message,
				};
			});
			e.preventDefault();
		} else {
			setError((prevValue) => {
				return {
					error: false,
					message: prevValue.message,
				};
			});
			updateState(e);
			e.preventDefault();
		}
	}

	return (
		<form className='textInputForm'>
			<label htmlFor={name}>{label}</label>
			<br />
			<input
				className='textInput'
				type='text'
				name={name}
				onChange={updateChange}
				value={stateData}
				placeholder={placeholder}
			/>
			<button className='addSubtractButtons' onClick={validateInput}>
				<FontAwesomeIcon icon='plus' />
			</button>
			{error.error === !false ? (
				<p className='errorMessage'>{error.message}</p>
			) : null}
		</form>
	);
}

export default TextInput;
