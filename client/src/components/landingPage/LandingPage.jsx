import React, { useContext } from 'react';
import Footer from '../Footer';
import { HashLink } from 'react-router-hash-link';
import { useHistory, Redirect } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';
import useDemo from './useDemo.js';

function LandingPage() {
	const history = useHistory();
	const { user } = useContext(UserContext);
	const { createDemoUser } = useDemo();

	function handleSignUp() {
		history.push('/register');
	}

	if (user) {
		return <Redirect to='/app' />;
	}

	return (
		<div className='landingContainer'>
			<div id='heroContainer'>
				<div id='heroHeaderContainer'>
					<h1 id='heroHeader'>
						A digital log
						<br /> you can't forget at home.
					</h1>

					<HashLink smooth to='/#about'>
						<button id='headerBtn' className='heroBtns'>
							Learn more
						</button>
					</HashLink>
				</div>

				<div id='btnContainer'>
					<button className='heroBtns' onClick={createDemoUser}>
						Demo
					</button>
					<button className='heroBtns' onClick={handleSignUp}>
						Sign up
					</button>
				</div>
			</div>
			<hr id='about' />
			<div className='landingAbout'>
				<h2>A child care journal that's connected </h2>
				<p>
					Easily keep track of your child's needs throughout the day.
					Whether with a sitter or on the go you'll always have access
					to your log. Keep track of meals, sleep, notes, and even
					poop! Use your child's log to learn habits, build schedules,
					and keep your child on track.
				</p>
			</div>
			<hr />
			<div className='landingList'>
				<h2>Why use a digital log?</h2>
				<ul>
					<li>Have access to your log any place any time.</li>
					<li>Never forget your journal again.</li>
					<li>Keep track of your child while you're at work.</li>
					<li>
						Use your log to get insights into changes in your
						child's eating, sleeping, and bathroom habits.
					</li>
					<li>
						Build and maintain healthy schedules everyone in your
						child's life can access.
					</li>
					<li>
						Never wonder when or how much again. Remove the doubt
						with the ease of a digital journal right at your
						fingertips.
					</li>
				</ul>
			</div>
			<hr />
			<div className='landingSignUp'>
				<h2>Register today!</h2>
				<p>Save a tree, digitize your journal!</p>
				<p>Sign up and start tracking instantly!</p>
				<button className='heroBtns' onClick={handleSignUp}>
					Sign up
				</button>
			</div>
			<Footer />
		</div>
	);
}

export default LandingPage;
