import React, { useContext } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';

function ProtectedRoute({ component: Component }) {
	const { user } = useContext(UserContext);

	if (user) {
		return (
			<Route>
				<Component />
			</Route>
		);
	} else {
		return <Redirect to='/login' />;
	}
}

export default withRouter(ProtectedRoute);
