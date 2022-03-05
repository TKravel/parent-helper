import React from 'react';

export const CreateHeadings = ({ data }) => {
	const headings = Object.keys(data[0]);

	return headings.map((item, index) => {
		if (item === '_id' || item === '__v') {
			return null;
		} else {
			return <th key={index}>{item}</th>;
		}
	});
};
