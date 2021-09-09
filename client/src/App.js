import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { UserContext } from './hooks/UserContext';
import useCheckToken from './hooks/useCheckToken';
import MainApp from './components/mainApp/MainApp';
import About from './components/about/About';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/landingPage/Login';
import Register from './components/landingPage/Register';

function App() {
	const { user, setUser, isLoading, logOut } = useCheckToken();

	return (
		<Router>
			<UserContext.Provider value={{ user, setUser, isLoading }}>
				<div className='app'>
					<nav className='App-header'>
						<h1>Parent Helper</h1>
						<ul>
							{!user && (
								<li>
									<Link to='/'>Home</Link>
								</li>
							)}

							<li>
								{user ? (
									<Link to='/login' onClick={logOut}>
										Log out
									</Link>
								) : (
									<Link to='/login'>Login</Link>
								)}
							</li>
						</ul>
					</nav>
					<Switch>
						<Route exact path='/'>
							<LandingPage />
						</Route>
						<Route exact path='/login'>
							<Login />
						</Route>
						<Route exact path='/register'>
							<Register />
						</Route>
						<ProtectedRoute exact path='/app' component={MainApp} />
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
