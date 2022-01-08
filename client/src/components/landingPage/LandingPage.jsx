import React, { useContext } from 'react';
import Footer from '../Footer';
import { HashLink } from 'react-router-hash-link';
import { useHistory, Redirect } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';
import useDemo from '../../hooks/useDemo';
import heroImg from '../../img/hero-img.png';
import signUpImg from '../../img/sign-up.png';
import aboutImg from '../../img/about-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faWifi,
	faLaptopHouse,
	faSearch,
	faListOl,
	faCheck,
	faUtensils,
	faBed,
	faPoo,
	faClipboard,
} from '@fortawesome/free-solid-svg-icons';

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
			<div id='hero-container'>
				<div id='hero-info'>
					<h1 id='hero-header'>A digital child care journal</h1>
					<HashLink id='learn-more-link' smooth to='/#about'>
						LEARN MORE
					</HashLink>
					<div id='hero-btn-container'>
						<button
							className='btn hero-btn'
							onClick={createDemoUser}
						>
							DEMO
						</button>
						<button className='btn hero-btn' onClick={handleSignUp}>
							SIGN UP
						</button>
					</div>
				</div>
				<div id='hero-img-container'>
					<img
						id='hero-img'
						src={heroImg}
						alt='Woman typing with child on lap'
					/>
				</div>
			</div>
			<div id='about' className='landingAbout'>
				<div id='about-text'>
					<h2 id='about-header'>Get connected</h2>
					<p>
						Forget about that old paper journal. Have comfort in
						knowing your journal is always at your finger tips no
						matter where you go.
					</p>
				</div>
				<div id='about-img-container'>
					<img
						id='about-img'
						src={aboutImg}
						alt='Woman looking at phone screen'
					/>
				</div>
			</div>
			<div id='landing-list-container'>
				<h2 id='list-header'>Why go digital?</h2>
				<ul id='landing-list'>
					<li>
						<FontAwesomeIcon className='list-icon' icon={faClock} />
						<span>Access your journal 24/7</span>
					</li>
					<li>
						<FontAwesomeIcon className='list-icon' icon={faWifi} />
						<span>Never forget your journal again</span>
					</li>
					<li>
						<FontAwesomeIcon
							className='list-icon'
							icon={faLaptopHouse}
						/>
						<span>Stay informed while away</span>
					</li>
					<li>
						<FontAwesomeIcon
							className='list-icon'
							icon={faSearch}
						/>
						<span>Get insights into your child's habits</span>
					</li>
					<li>
						<FontAwesomeIcon
							className='list-icon'
							icon={faListOl}
						/>
						<span>Build and maintain healthy schedules</span>
					</li>
					<li>
						<FontAwesomeIcon className='list-icon' icon={faCheck} />
						<span>Remove the doubt with digital data</span>
					</li>
				</ul>
			</div>
			<div id='features-container'>
				<h2 id='feature-header'>Features</h2>
				<ul id='feature-list'>
					<li className='feature-card'>
						<div className='icon-wrapper'>
							<FontAwesomeIcon
								className='card-icon'
								icon={faUtensils}
							/>
						</div>
						<span>
							<strong>Food</strong>
						</span>
					</li>
					<li className='feature-card'>
						<div className='icon-wrapper'>
							<FontAwesomeIcon
								className='card-icon'
								icon={faBed}
							/>
						</div>
						<span>
							<strong>Sleep</strong>
						</span>
					</li>
					<li className='feature-card'>
						<div className='icon-wrapper'>
							<FontAwesomeIcon
								className='card-icon'
								icon={faPoo}
							/>
						</div>
						<span>
							<strong>Poop</strong>
						</span>
					</li>
					<li className='feature-card'>
						<div className='icon-wrapper'>
							<FontAwesomeIcon
								className='card-icon'
								icon={faClipboard}
							/>
						</div>
						<span>
							<strong>Notes</strong>
						</span>
					</li>
				</ul>
			</div>
			<div id='landing-sign-up-container'>
				<div id='landing-sign-up-img-container'>
					<img
						id='landing-sign-up-img'
						src={signUpImg}
						alt='Male signing up'
					/>
				</div>
				<div id='landing-sign-up-text'>
					<h2>Register today!</h2>
					<p>Save a tree, digitize your journal!</p>
					<button className='btn' onClick={handleSignUp}>
						SIGN UP
					</button>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default LandingPage;
