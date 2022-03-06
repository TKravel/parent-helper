import React, { useState, useEffect, useContext, useCallback } from 'react';
import { CreateRows } from './CreateRows';
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
import { Modal } from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPage } from '../../../features/daysSlice';
import { UserContext } from '../../../hooks/UserContext';
import { CreateHeadings } from './CreateHeadings';

// Turn nested object into array containing a single obj to iterate over easier
const parseData = (appData) => {
	const displayableData = [];
	// Clear prev results
	displayableData.length = 0;

	appData.forEach((item) => {
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
		displayableData.push(result);
	});

	return displayableData;
};

export const DataTable = ({ edit, setEdit, currentPage, setPage }) => {
	const dispatch = useDispatch();
	const { user } = useContext(UserContext);
	const appData = useSelector((state) => state.days.data.arr);
	const count = useSelector((state) => state.days.data.count);
	const pageChange = useSelector((state) => state.days.pageStatus);
	const [dataRecords, setData] = useState([]);
	const [isModelOpen, setIsModalOpen] = useState(false);
	const [modalState, setModalState] = useState({});
	const modalData = {};

	// Check for parsed table data, parse if empty
	if (dataRecords.length === 0) {
		setData(parseData(appData));
	}

	// Update table on state updates
	useEffect(() => {
		if (appData !== undefined) {
			setData(parseData(appData));
		}
	}, [appData]);

	// Handle modal and modal data
	const handleModal = (e) => {
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

		isModelOpen ? setIsModalOpen(false) : setIsModalOpen(true);
	};

	// Table pagination
	const prevPage = () => {
		const data = {
			page: currentPage - 1,
			auth: user.auth,
		};
		dispatch(fetchPage(data));
		setPage((prevValue) => prevValue - 1);
	};
	const nextPage = () => {
		const data = {
			page: currentPage + 1,
			auth: user.auth,
		};
		dispatch(fetchPage(data));
		setPage((preValue) => preValue + 1);
	};
	const handlePage = (e) => {
		let button = e.currentTarget.name;

		if (currentPage === 1 && button === 'prev') {
			return;
		}

		button === 'prev' ? prevPage() : nextPage();
	};

	// On successful page change update editing information
	const handlePageChangeStatus = useCallback(() => {
		if (pageChange === 'succeeded') {
			if (currentPage === 1) {
				setEdit({
					status: false,
					id: appData[0]._id,
					dataIndex: 0,
				});
			} else {
				setEdit({
					status: true,
					id: appData[0]._id,
					dataIndex: 0,
				});
			}
		}
	}, [pageChange, currentPage, setEdit]);

	useEffect(() => {
		handlePageChangeStatus();
	}, [pageChange, handlePageChangeStatus]);

	// Find max page number based on document count
	const maxPage = Math.ceil(count / 7);

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
					Page {currentPage} of {maxPage < 1 ? 1 : maxPage}
				</p>
				<button
					name='next'
					className='tableNavbtns'
					onClick={handlePage}
					disabled={currentPage === maxPage || (maxPage < 1 && true)}
				>
					<FontAwesomeIcon icon={faChevronCircleRight} />
				</button>
			</div>
			<table className='dataTable'>
				<tbody>
					<tr>
						<CreateHeadings data={dataRecords} />
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
};
