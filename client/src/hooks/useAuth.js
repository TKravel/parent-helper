import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext';

function useAuth() {
	const history = useHistory();
	const { setUser } = useContext(UserContext);
	const [error, setError] = useState({});

	// Create user
	function createUser(values) {
		const data = {
			username: values.username,
			email: values.email,
			email2: values.email2,
			password: values.password,
			password2: values.password2,
		};

		return fetch('/users/createUser', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.token) {
					localStorage.setItem('token', data.token);
					setUser({
						auth: data.token,
					});
					history.push('/app');
				} else if (data.message) {
					setError(data);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	// Login
	function loginUser(values) {
		const data = {
			username: values.username,
			password: values.password,
		};

		return fetch('/users/login', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(data),
		})
			.then((responce) => responce.json())
			.then((data) => {
				if (!data.message) {
					localStorage.setItem('token', data.token);
					setUser({
						auth: data.token,
					});
					history.push('/app');
				} else {
					setError({ message: data.message });
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	return {
		createUser,
		loginUser,
		error,
	};
}

export default useAuth;
