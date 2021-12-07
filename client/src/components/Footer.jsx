import React from 'react';

function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<p id='footer'>
			<span dangerouslySetInnerHTML={{ __html: '&copy' }}></span>{' '}
			TKDevDesign.com {year}
		</p>
	);
}

export default Footer;
