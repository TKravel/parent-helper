import React, { useState, useEffect } from 'react';
import CreateRows from './CreateRows';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faChevronCircleLeft,
	faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import {
	convertTo12HR,
	calcNapTime,
	displayDate,
} from '../../../dateTimeHelpers';
import Modal from './Modal';

function flatenData(fetchedData) {
	const flatData = [];
	flatData.length = 0;

	fetchedData.map((item) => {
		let result = {
			date: '',
			food: [],
			poop: 0,
			'Wake up': '',
			'Nap 1': '',
			'Nap 2': '',
			'Bed time': '',
			notes: '',
			Edit: '',
		};
		Object.entries(item).forEach(([key, value]) => {
			if (key === '__v' || key === 'userId') {
				return null;
			}
			if (Array.isArray(value)) {
				if (value.length === 0) {
					value = 'No data';
					result[key] = value;
				} else {
					const length = value.length;
					let items = value.join(', ');
					items =
						items[0].toUpperCase() + items.slice(1).toLowerCase();
					const output = [[length], [items]];
					result[key] = output;
				}
			} else if (
				typeof item[key] === 'object' &&
				item[key] !== null &&
				!Array.isArray(item[key])
			) {
				let wUp = item[key].wakeUp;
				let fNapStart = item[key].nap1Start;
				let fNapEnd = item[key].nap1End;
				let sNapStart = item[key].nap2Start;
				let sNapEnd = item[key].nap2End;
				let bTime = item[key].bedTime;

				result['Wake up'] = convertTo12HR(wUp);
				result['Nap 1'] = calcNapTime(fNapStart, fNapEnd);
				result['Nap 2'] = calcNapTime(sNapStart, sNapEnd);
				result['Bed time'] = convertTo12HR(bTime);
			} else if (key === 'date') {
				result[key] = displayDate(value);
			} else if (key === '_id') {
				result.Edit = value;
			} else {
				result[key] = value;
			}
		});
		flatData.push(result);
	});

	return flatData;
}

function DataTable({ edit, fetchedData, currentPage, setPage, pageCount }) {
	const [dataRecords, setData] = useState([]);
	const [isModelOpen, setIsModalOpen] = useState(false);
	const [modalState, setModalState] = useState({});

	const modalData = {};

	if (dataRecords.length === 0) {
		let readyData = flatenData(fetchedData);
		setData(readyData);
	}

	useEffect(() => {
		let readyData = flatenData(fetchedData);
		setData(readyData);
	}, [fetchedData]);

	function GetHeadings() {
		const headings = Object.keys(dataRecords[0]);

		return headings.map((item, index) => {
			if (item === '_id' || item === '__v') {
				return null;
			} else {
				return <th key={index}>{item}</th>;
			}
		});
	}

	function handleModal(e) {
		e.preventDefault();
		const td = e.currentTarget.parentNode.getAttribute('id');
		const data = e.currentTarget.parentNode.getAttribute('data-items');
		const date = e.currentTarget.parentNode.getAttribute('data-date');
		const amount = e.currentTarget.parentNode.getAttribute('data-amount');

		console.log(data);

		!isModelOpen
			? setModalState({
					selectedTd: td,
					date: date,
					amount: amount,
					data: data,
			  })
			: setModalState({});
		modalData.selectedTd = td;
		modalData.date = date;
		modalData.data = [data];

		isModelOpen ? setIsModalOpen(false) : setIsModalOpen(true);
	}

	function handlePage(e) {
		e.preventDefault();
		let button = e.currentTarget.name;
		console.log(button);

		if (currentPage === 1 && button === 'prev') {
			return;
		}

		button === 'prev'
			? setPage((prevValue) => prevValue - 1)
			: setPage((preValue) => preValue + 1);
	}
	const maxPage = Math.ceil(pageCount / 7);

	return (
		<div id='tableContainer'>
			<div id='tableNav'>
				<button
					name='prev'
					className='tableNavbtns'
					onClick={handlePage}
					disabled={currentPage === 1 && true}
				>
					<FontAwesomeIcon icon={faChevronCircleLeft} />
				</button>
				<p>
					Page {currentPage} of {Math.ceil(pageCount / 7)}
				</p>
				<button
					name='next'
					className='tableNavbtns'
					onClick={handlePage}
					disabled={currentPage === maxPage && true}
				>
					<FontAwesomeIcon icon={faChevronCircleRight} />
				</button>
			</div>
			<table className='dataTable'>
				<tbody>
					<tr>
						<GetHeadings />
					</tr>
					<CreateRows
						edit={edit}
						data={dataRecords}
						toggleModal={handleModal}
					/>
				</tbody>
			</table>

			<Modal
				isOpen={isModelOpen}
				toggleModal={handleModal}
				data={modalState}
			/>
		</div>
	);
}

export default DataTable;
