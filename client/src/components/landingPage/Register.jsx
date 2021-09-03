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
					name='userName'
					placeholder='Username'
					style={errors.userNameMargin || { marginBottom: '25px' }}
					onChange={handleChange}
					value={values.userName || ''}
				/>
				{errors.userName && (
					<p className='formError'>{errors.userName}</p>
				)}
				<input
					type='email'
					name='email'
					placeholder='Email'
					style={errors.emailMargin || { marginBottom: '25px' }}
					onChange={handleChange}
					value={values.email || ''}
				/>
				{errors.email && <p className='formError'>{errors.email}</p>}
				<input
					type='email'
					name='email2'
					placeholder='Re-enter Email'
					style={errors.email2Margin || { marginBottom: '25px' }}
					onChange={handleChange}
					value={values.email2 || ''}
				/>
				{errors.email2 && <p className='formError'>{errors.email2}</p>}
				<input
					type='password'
					name='password'
					placeholder='Password'
					style={errors.passwordMargin || { marginBottom: '25px' }}
					onChange={handleChange}
					value={values.password || ''}
				/>
				{errors.password && (
					<p className='formError'>{errors.password}</p>
				)}
				<input
					type='password'
					name='password2'
					placeholder='Re-enter Password'
					style={errors.password2Margin || { marginBottom: '15px' }}
					onChange={handleChange}
					value={values.password2 || ''}
				/>
				{error.message && <p className='formError'>{error.message}</p>}
				{errors.password2 && (
					<p className='formError'>{errors.password2}</p>
				)}
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
