import React, { useState } from 'react';
import { convertTo12HR } from '../../../dateTimeHelpers';

export const SleepInput = ({
	name,
	label,
	napData,
	onChange,
	handleSubmit,
}) => {
	const [display, setDisplay] = useState(false);

	const handleBlur = () => {
		if (napData !== '--:--') {
			setDisplay(false);
			handleSubmit();
		}
	};

	const editTime = () => {
		setDisplay(true);
	};

	return (
		<div>
			{display === true ? (
				<>
					<label htmlFor={name}>{label}</label>
					<input
						type='time'
						id={name}
						name={name}
						onChange={onChange}
						onBlur={handleBlur}
						value={napData}
					/>
				</>
			) : (
				<>
					<p>
						{label}
						<span onClick={editTime}>
							{napData === '00:00'
								? napData
								: convertTo12HR(napData)}
						</span>
					</p>
				</>
			)}
		</div>
	);
};
