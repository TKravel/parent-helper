import React from 'react';
import { CreateData } from './CreateData';

export const CreateRows = ({ edit, data, toggleModal }) => {
	return data.map((item, index) => {
		return (
			<tr key={index} dataindex={index}>
				<CreateData
					key={index}
					item={item}
					edit={edit}
					data={data}
					toggleModal={toggleModal}
				/>
			</tr>
		);
	});
};
