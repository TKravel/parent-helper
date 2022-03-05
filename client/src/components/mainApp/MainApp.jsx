import React, { useState, useEffect, useContext } from 'react';
import { FoodSection } from './foodSection/FoodSection';
import { SleepSection } from './sleepSection/SleepSection';
import { PottySection } from './poopSection/PottySection';
import { NotesSection } from './notesSection/NotesSection';
import { UserInputNav } from './userInputNav';
import { DataTable } from './dataTable/DataTable';
import { UserContext } from '../../hooks/UserContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faPlus,
	faMinus,
	faEdit,
	faTimes,
	faExpand,
} from '@fortawesome/free-solid-svg-icons';
import { convertToDbDateFormat, getCurrentDate } from '../../dateTimeHelpers';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDays } from '../../features/daysSlice';

library.add(faPlus, faMinus, faEdit, faTimes, faExpand);

function MainApp() {
	const { user } = useContext(UserContext);
	const dispatch = useDispatch();
	const { status } = useSelector((state) => state.days);
	const appData = useSelector((state) => state.days.data.arr);

	// Section display state
	const [display, setDisplay] = useState({
		foodSection: true,
		sleepSection: false,
		pottySection: false,
		notesSection: false,
	});

	// Page loading state
	const [loading, setLoading] = useState(true);

	// Editing details
	const [editingState, setEditingState] = useState({
		status: false,
		id: '',
		dataIndex: 0,
	});

	// Page state
	const [page, setPage] = useState(1);

	useEffect(() => {
		const data = {
			page: page,
			auth: user.auth,
		};
		if (status === 'idle') {
			dispatch(fetchDays(data));
		} else if (status === 'succeeded') {
			if (loading) {
				setLoading(false);
			}
		}
	}, [status, dispatch]);

	// Load input section with edit selection
	function loadEdit(e) {
		const currentDate = getCurrentDate().replace(/\//g, '');
		if (e.target !== undefined) {
			const index =
				e.currentTarget.parentNode.parentNode.getAttribute('dataindex');
			if (appData[index].date === convertToDbDateFormat(currentDate)) {
				setEditingState((prevValues) => {
					return {
						...prevValues,
						status: false,
						dataIndex: index,
					};
				});
			} else {
				setEditingState((prevValues) => {
					return {
						...prevValues,
						status: true,
						dataIndex: index,
					};
				});
			}
		}
	}

	// Return to editing today
	function closeEditerButton() {
		if (page !== 1) {
			const data = {
				page: page,
				auth: user.auth,
			};
			dispatch(fetchDays(data));
		} else {
			setEditingState((prevValues) => {
				return {
					...prevValues,
					status: false,
					dataIndex: 0,
				};
			});
		}
	}

	return (
		<>
			{loading ? (
				<div className='loaderContainer'>
					<Loader
						className='loader'
						type='TailSpin'
						color='#00BFFF'
						height={100}
						width={100}
					/>
				</div>
			) : (
				<div className='mainAppContainer'>
					<div className='container'>
						{display.foodSection ? (
							<FoodSection isEditing={editingState} />
						) : null}
						{display.sleepSection ? (
							<SleepSection isEditing={editingState} />
						) : null}
						{display.pottySection ? (
							<PottySection isEditing={editingState} />
						) : null}
						{display.notesSection ? (
							<NotesSection isEditing={editingState} />
						) : null}
						<UserInputNav
							updateDisplay={setDisplay}
							isEditing={editingState}
							closeEditer={closeEditerButton}
						/>
					</div>
					<DataTable
						edit={loadEdit}
						currentPage={page}
						setPage={setPage}
					/>
				</div>
			)}
		</>
	);
}

export default MainApp;
