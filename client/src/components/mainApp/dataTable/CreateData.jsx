import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CreateData({ item, edit, data, toggleModal }) {
	const keys = Object.keys(data[0]);
	return keys.map((key, index) => {
		if (key === 'Edit') {
			return (
				<td key={item[key] + index} id={item[key]} className='editTD'>
					<button className='editButton' onClick={edit}>
						<FontAwesomeIcon icon='edit' />
					</button>
				</td>
			);
		} else if (key === 'food' || key === 'notes') {
			if (item[key] === 'No data') {
				return <td key={item[key] + index}>No data</td>;
			} else {
				return (
					<td
						key={item[key] + index}
						id={key}
						data-items={item[key][1]}
						data-date={item['date']}
						data-amount={item[key][0]}
					>
						{item[key][0] === '1'
							? item[key][0] + ' item'
							: item[key][0] + ' items'}

						<button
							className='editButton'
							onClick={toggleModal}
							style={{ display: 'inline' }}
						>
							<FontAwesomeIcon icon='expand' />
						</button>
					</td>
				);
			}
		} else {
			return <td key={item[key] + index}>{item[key]}</td>;
		}
	});
}

export default CreateData;
