import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { UserContext } from './hooks/UserContext';
import useCheckToken from './hooks/useCheckToken';
import MainApp from './components/mainApp/MainApp';
import LandingPage from './components/landingPage/LandingPage';
import About from './components/about/About';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

function App() {
	const { user, setUser, isLoading, logOut } = useCheckToken();

	if (user) {
	}

	return (
		<Router>
			<UserContext.Provider value={{ user, setUser, isLoading }}>
				<div className='app'>
					<nav className='App-header'>
						<h1>Parent Helper</h1>
						<ul>
							<li>
								{user ? (
									<Link to='/login' onClick={logOut}>
										Log out
									</Link>
								) : (
									<Link to='/login'>Login</Link>
								)}
							</li>
							{user && (
								<li>
									<Link to='/'>Tracker</Link>
								</li>
							)}
							<li>
								<Link to='/about'>About</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route exact path='/login'>
							<LandingPage />
						</Route>
						<ProtectedRoute exact path='/' component={MainApp} />
						<Route exact path='/about'>
							<About />
						</Route>
					</Switch>
				</div>
			</UserContext.Provider>
		</Router>
	);
}

export default App;
