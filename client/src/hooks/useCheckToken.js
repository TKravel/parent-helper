import { useEffect, useState } from 'react';

function useCheckToken() {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let token;
		function checkUser() {
			if (localStorage.token) {
				token = localStorage.token;
				// console.log('User id is: ' + userId + ' token is:  ' + token);
				setUser({
					auth: token,
				});
				setIsLoading(false);
				// console.log(user.auth);
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
		isLoading,
		logOut,
	};
}

export default useCheckToken;
