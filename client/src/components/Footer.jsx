import React from 'react';

function Footer() {
	const date = new Date();
	const year = date.getFullYear();
	const copyRight = { __html: '&copy' };
	const cR = <>&copy</>;

	return (
		<p id='footer'>
			Created by Tim Kravel{' '}
			<span dangerouslySetInnerHTML={{ __html: '&copy' }}></span> {year}
		</p>
	);
}

export default Footer;
