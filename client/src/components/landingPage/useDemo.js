import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';

function useDemo() {
	const { setUser } = useContext(UserContext);
	const history = useHistory();
	function createDemoUser() {
		fetch('/users/createDemoUser')
			.then((response) => response.json())
			.then((data) => {
				if (data.message) {
					createDemoUser();
				}
				if (data.token) {
					localStorage.setItem('token', data.token);
					setUser({
						auth: data.token,
					});
					history.push('/app');
				}
			})
			.catch((error) => {
				console.log('error: ', error);
			});
	}

	return { createDemoUser };
}

export default useDemo;
