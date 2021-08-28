import React, { useState, useEffect } from 'react';
import CreateRows from './CreateRows';
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
			if (key === '__v') {
				return null;
			}
			if (Array.isArray(value)) {
				if (value.length === 0) {
					value = 'No data';
					result[key] = value;
				} else {
					const length = value.length;
					const items = value.join(', ');
					const output = [[length], [items]];
					result[key] = output;
					console.log(output);
				}
			} else if (
				typeof item[key] === 'object' &&
				item[key] !== null &&
				!Array.isArray(item[key])
			) {
				let wUp = item[key].wakeUp;
				let fNapStart = item[key].firstNapStart;
				let fNapEnd = item[key].firstNapEnd;
				let sNapStart = item[key].secondNapStart;
				let sNapEnd = item[key].secondNapEnd;
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

function DataTable({ edit, fetchedData }) {
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
		console.log(td);
		console.log(data);
		console.log(date);
		console.log(modalData);

		isModelOpen ? setIsModalOpen(false) : setIsModalOpen(true);
	}

	return (
		<>
			{dataRecords.length === 0 ? (
				<p>Loading data...</p>
			) : (
				<table>
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
			)}
			<Modal
				isOpen={isModelOpen}
				toggleModal={handleModal}
				data={modalState}
			/>
		</>
	);
}

export default DataTable;
