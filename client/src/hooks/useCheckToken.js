import { useEffect, useState } from 'react';

function useCheckToken() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		let token;
		function checkUser() {
			if (localStorage.token) {
				token = localStorage.token;
				setUser({
					auth: token,
				});
			} else {
				setUser(null);
			}
		}
		checkUser();
	}, []);

	function logOut() {
		localStorage.removeItem('token');
		setUser(null);
	}
	return {
		user,
		setUser,
		logOut,
	};
}

export default useCheckToken;
