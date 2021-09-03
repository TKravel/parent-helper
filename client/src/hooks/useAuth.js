import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext';

function useAuth() {
	// const { setUser } = useCheckToken();
	const history = useHistory();
	const { setUser } = useContext(UserContext);
	const [error, setError] = useState({});

	function createUser(values) {
		const data = {
			username: values.userName,
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
				if (data) {
					localStorage.setItem('token', data.token);
					setUser({
						auth: data.token,
					});
					history.push('/');
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	function loginUser(values) {
		const data = {
			username: values.userName,
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
				if (!data.error) {
					localStorage.setItem('token', data.token);
					setUser({
						auth: data.token,
					});
					history.push('/');
				} else {
					setError(data.error);
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
