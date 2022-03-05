import React, { useEffect } from 'react';
import reactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Modal = ({ toggleModal, isOpen, data }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	return reactDOM.createPortal(
		<div id='modalWrapper'>
			<div id='modal'>
				<div id='modalHeader'>
					<button id='modalCloseBtn' onClick={toggleModal}>
						<FontAwesomeIcon icon='times' />
					</button>
					<p id='modalDate'>{data.date}</p>
					<p id='modalHeader'>{data.selectedTd}</p>
				</div>
				<div id='modalBody'>
					<p id='itemCount'>
						{data.amount === '1'
							? data.amount + ' item recored'
							: data.amount + ' items recorded'}
					</p>
					<p id='itemList'>{data.data}</p>
				</div>
			</div>
		</div>,
		document.getElementById('table-modal')
	);
};
