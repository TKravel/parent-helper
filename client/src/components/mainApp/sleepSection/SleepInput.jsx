import React, { useState } from 'react';
import { convertTo12HR } from '../../../dateTimeHelpers';

function SleepInput({ name, label, napData, onChange }) {
	const [display, setDisplay] = useState(false);

	function handleBlur(e) {
		if (napData !== '--:--') {
			setDisplay(false);
			e.preventDefault();
			console.log(napData);
		}
	}

	function editTime() {
		setDisplay(true);
	}

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
}

export default SleepInput;
