import React from 'react';

function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<p id='footer'>
			Created by Tim Kravel{' '}
			<span dangerouslySetInnerHTML={{ __html: '&copy' }}></span> {year}
		</p>
	);
}

export default Footer;
