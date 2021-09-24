import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import validate from './registerValidation';
import useAuth from '../../hooks/useAuth';
import { UserContext } from '../../hooks/UserContext';
import { Redirect, useHistory } from 'react-router-dom';

function Register() {
	const { values, errors, handleChange, handleSubmit } = useForm(
		registerUser,
		validate
	);

	const { createUser, error } = useAuth();

	const { user } = useContext(UserContext);

	const history = useHistory();

	function registerUser() {
		createUser(values);
	}

	function toggleForm() {
		history.push('/login');
	}

	if (user) {
		return <Redirect to='/app' />;
	}

	return (
		<div className='loginWrapper'>
			<div className='loginContainer'>
				<div className='registerForm'>
					<p className='loginMessage'>
						Register
						<br /> to start tracking!
					</p>
					<form className='loginForm' onSubmit={handleSubmit}>
						<input
							type='text'
							name='username'
							placeholder='Username'
							onChange={handleChange}
							value={values.username || ''}
						/>
						<p className='formError'>{errors.username}</p>
						<input
							type='email'
							name='email'
							placeholder='Email'
							onChange={handleChange}
							value={values.email || ''}
						/>
						<p className='formError'>{errors.email}</p>
						<input
							type='email'
							name='email2'
							placeholder='Re-enter Email'
							onChange={handleChange}
							value={values.email2 || ''}
						/>
						<p className='formError'>{errors.email2}</p>
						<input
							type='password'
							name='password'
							placeholder='Password'
							onChange={handleChange}
							value={values.password || ''}
						/>
						<p className='formError'>{errors.password}</p>
						<input
							type='password'
							name='password2'
							placeholder='Re-enter Password'
							onChange={handleChange}
							value={values.password2 || ''}
						/>
						<p className='formError'>
							{errors.password2}
							{error.message}
						</p>
						<button type='submit' className='submitBtn'>
							Register
						</button>
						<p>Already have an account?</p>
						<button className='linkBtn' onClick={toggleForm}>
							Click here to login.
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
