import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';
import Login from './Login';
import Register from './Register';

function LandingPage() {
	const [isRegistered, setIsRegistered] = useState(true);

	const { user } = useContext(UserContext);

	function loginRegisterToggle() {
		setIsRegistered((prevValue) => !prevValue);
	}

	if (user) {
		return <Redirect to='/' />;
	}

	return (
		<div className='loginContainer'>
			{isRegistered ? (
				<Login toggleForm={loginRegisterToggle} />
			) : (
				<Register toggleForm={loginRegisterToggle} />
			)}
		</div>
	);
}

export default LandingPage;
