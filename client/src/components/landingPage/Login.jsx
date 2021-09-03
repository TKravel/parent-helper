import React, { useState } from 'react';
import useForm from './useForm';
import validate from './loginValidation';
import useAuth from '../../hooks/useAuth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

function Login({ toggleForm }) {
	const { values, errors, handleChange, handleSubmit } = useForm(
		login,
		validate
	);

	const { loginUser, error } = useAuth(values);

	const [loginStatus, setLoginStatus] = useState(false);

	function login() {
		loginUser(values);
	}

	return (
		<div>
			<FontAwesomeIcon icon={faChartLine} id='signInIcon' />
			<p className='loginMessage'>
				Sign in
				<br /> to keep on tracking!
			</p>
			<form className='loginForm' onSubmit={handleSubmit}>
				<input
					type='text'
					name='userName'
					placeholder='Username'
					style={errors.userNameMargin || { marginBottom: '25px' }}
					autoComplete='off'
					value={values.userName || ''}
					onChange={handleChange}
				/>
				{errors.userName && (
					<p className='formError'>{errors.userName}</p>
				)}
				<input
					type='password'
					name='password'
					placeholder='Password'
					style={errors.passwordMargin || { marginBottom: '15px' }}
					value={values.password || ''}
					onChange={handleChange}
				/>
				{error.message && (
					<p className='formError'>{loginStatus.message}</p>
				)}
				{errors.password && (
					<p className='formError'>{errors.password}</p>
				)}
				<button type='submit' className='submitBtn'>
					Sign in
				</button>
				<p>Dont have a account?</p>
				<button className='linkBtn' onClick={toggleForm}>
					Register here!
				</button>
			</form>
		</div>
	);
}

export default Login;
