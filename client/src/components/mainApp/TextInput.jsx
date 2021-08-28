import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TextInput(props) {
	const [error, setError] = useState({
		error: false,
		message: 'Input required',
	});

	function validateInput(e) {
		if (props.stateData === '') {
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
			props.updateState(e);
			e.preventDefault();
		}
	}

	return (
		<form className='textInputForm'>
			<label htmlFor={props.name}>{props.label}</label>
			<br />
			<input
				className='textInput'
				type='text'
				name={props.name}
				onChange={props.updateChange}
				value={props.stateData}
				placeholder={props.placeholder}
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
