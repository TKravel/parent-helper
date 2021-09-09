import React, { useContext } from 'react';
import useForm from './useForm';
import validate from './loginValidation';
import useAuth from '../../hooks/useAuth';
import { UserContext } from '../../hooks/UserContext';
import { Redirect, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

function Login() {
	const { values, errors, handleChange, handleSubmit } = useForm(
		login,
		validate
	);

	const { loginUser, error } = useAuth(values);

	const { user } = useContext(UserContext);

	const history = useHistory();

	function login() {
		loginUser(values);
	}

	function toggleForm() {
		history.push('/register');
	}

	if (user) {
		return <Redirect to='/app' />;
	}

	return (
		<div className='loginContainer'>
			<FontAwesomeIcon icon={faChartLine} id='signInIcon' />
			<p className='loginMessage'>
				Sign in
				<br /> to keep on tracking!
			</p>
			<form className='loginForm' onSubmit={handleSubmit}>
				<input
					type='text'
					name='username'
					placeholder='Username'
					autoComplete='off'
					value={values.username || ''}
					onChange={handleChange}
				/>
				<p id='usernameErr' className='formError'>
					{errors.userName && errors.userName}
				</p>

				<input
					type='password'
					name='password'
					placeholder='Password'
					value={values.password || ''}
					onChange={handleChange}
				/>
				<p id='passwordErr' className='formError'>
					{errors.password}
					{!errors.password && !errors.userName
						? error.message
						: null}
				</p>

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
