import React from 'react';
import useForm from './useForm';
import validate from './registerValidation';
import useAuth from '../../hooks/useAuth';

function Register({ toggleForm }) {
	const { values, errors, handleChange, handleSubmit } = useForm(
		registerUser,
		validate
	);

	const { createUser, error } = useAuth();

	function registerUser() {
		createUser(values);
	}

	return (
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
	);
}

export default Register;
