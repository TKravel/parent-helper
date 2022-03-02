import React, { useState, useEffect, useContext } from 'react';
import FoodSection from './foodSection/FoodSection';
import SleepSection from './sleepSection/SleepSection';
import PottySection from './poopSection/PottySection';
import NotesSection from './notesSection/NotesSection';
import UserInputNav from './userInputNav';
import DataTable from './dataTable/DataTable';
import { UserContext } from '../../hooks/UserContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faPlus,
	faMinus,
	faEdit,
	faTimes,
	faExpand,
} from '@fortawesome/free-solid-svg-icons';
import { getCurrentDate } from '../../dateTimeHelpers';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useDispatch, useSelector } from 'react-redux';
import { populateStore, fetchDays } from '../../features/daysSlice';

library.add(faPlus, faMinus, faEdit, faTimes, faExpand);

function MainApp() {
	const { user } = useContext(UserContext);
	const dispatch = useDispatch();
	const loadingStatus = useSelector((state) => state.days.status);
	console.log(loadingStatus);
	const data = useSelector((state) => state.days.data);

	// Section display state
	const [display, setDisplay] = useState({
		foodSection: true,
		sleepSection: false,
		pottySection: false,
		notesSection: false,
	});

	// Todays data
	const [appState, setAppState] = useState({});

	// Fetched data
	const [dbData, setDbData] = useState([]);

	// Page loading state
	const [loading, setLoading] = useState({
		isLoading: true,
	});

	// Editing details
	const [editingState, setEditingState] = useState({
		status: false,
		id: '',
		cacheDbDataIndex: 0,
		reloadTable: 0,
	});

	// Page state
	const [page, setPage] = useState(1);
	const [pageCount, setPageCount] = useState(null);

	// AppState handler
	function handleStateChange(sectionName, updatedState) {
		switch (sectionName) {
			case 'food':
				setAppState((prevValue) => {
					return {
						...prevValue,
						food: [...prevValue.food, updatedState],
					};
				});
				break;
			case 'foodItemDelete':
				setAppState((prevValue) => {
					return {
						...prevValue,
						food: updatedState,
					};
				});
				break;
			case 'sleep':
				const { name, value } = updatedState;
				setAppState((prevValue) => {
					return {
						...prevValue,
						sleep: {
							...prevValue.sleep,
							[name]: value,
						},
					};
				});
				break;
			case 'poop':
				setAppState((prevValue) => {
					return {
						...prevValue,
						poop: updatedState,
					};
				});
				break;
			case 'notes':
				setAppState((prevValue) => {
					return {
						...prevValue,
						notes: [...prevValue.notes, updatedState],
					};
				});
				break;
			case 'noteItemDelete':
				setAppState((prevValue) => {
					return {
						...prevValue,
						notes: updatedState,
					};
				});
				break;
			default:
				console.log('error');
				break;
		}
	}

	useEffect(() => {
		const data = {
			page: page,
			auth: user.auth,
		};
		if (loadingStatus === 'idle') {
			dispatch(fetchDays(data));
		} else if (loadingStatus === 'loading') {
			setLoading(true);
		} else if (loadingStatus === 'succeeded') {
			setLoading(false);
		}

		// fetch('/api/userData', {
		// 	method: 'POST',
		// 	headers: {
		// 		authorization: user.auth,
		// 		'content-type': 'application/json',
		// 	},
		// 	body: JSON.stringify(data),
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		if (data.arr) {
		// 			dispatch(populateStore(data.arr));
		// 			setDbData(() => {
		// 				return data.arr;
		// 			});
		// 			setAppState(() => {
		// 				const clone = JSON.parse(JSON.stringify(data.arr[0]));
		// 				return clone;
		// 			});
		// 		}
		// 		setPageCount(data.count);
		// 		setLoading({
		// 			isLoading: false,
		// 		});
		// 		page === 1
		// 			? setEditingState((prevValue) => {
		// 					return {
		// 						...prevValue,
		// 						status: false,
		// 						id: data.arr[0]._id,
		// 						cacheDbDataIndex: 0,
		// 					};
		// 			  })
		// 			: setEditingState((prevValue) => {
		// 					return {
		// 						...prevValue,
		// 						status: true,
		// 						id: data.arr[0]._id,
		// 						cacheDbDataIndex: 0,
		// 					};
		// 			  });
		// 	});
	}, [loadingStatus]);

	// Load input section with edit selection
	function loadEdit(e) {
		const currentDate = getCurrentDate().replace(/\//g, '');
		if (e.target !== undefined) {
			e.preventDefault();
			const index =
				e.currentTarget.parentNode.parentNode.getAttribute('dataindex');
			const clone = JSON.parse(JSON.stringify(dbData[index]));
			setAppState({
				date: clone.date,
				food: clone.food,
				sleep: clone.sleep,
				poop: clone.poop,
				notes: clone.notes,
			});
			currentDate === clone.date
				? setEditingState((prevValue) => {
						return {
							status: false,
							id: clone._id,
							cacheDbDataIndex: index,
							reloadTable: prevValue.reloadTable,
						};
				  })
				: setEditingState((prevValue) => {
						return {
							status: true,
							id: clone._id,
							cacheDbDataIndex: index,
							reloadTable: prevValue.reloadTable,
						};
				  });
		}
	}

	// Return to editing today
	function closeEditerButton() {
		const clone = JSON.parse(JSON.stringify(dbData[0]));
		setAppState(() => {
			return clone;
		});
		setEditingState((prevValue) => {
			return {
				status: false,
				id: clone._id,
				cacheDbDataIndex: 0,
				reloadTable: prevValue.reloadTable,
			};
		});
		if (page !== 1) {
			setPage(1);
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
						{display.foodSection && !loading.todayData ? (
							<FoodSection
								sectionData={appState.food}
								setMainState={setAppState}
								onFoodChange={handleStateChange}
								isEditing={editingState}
								cachedData={dbData}
								setCachedData={setDbData}
							/>
						) : null}
						{display.sleepSection ? (
							<SleepSection
								sectionData={appState.sleep}
								setMainState={setAppState}
								onNapChange={handleStateChange}
								isEditing={editingState}
								cachedData={dbData}
								setCachedData={setDbData}
							/>
						) : null}
						{display.pottySection ? (
							<PottySection
								sectionData={appState.poop}
								setMainState={setAppState}
								onPoopChange={handleStateChange}
								isEditing={editingState}
								cachedData={dbData}
								setCachedData={setDbData}
							/>
						) : null}
						{display.notesSection ? (
							<NotesSection
								sectionData={appState.notes}
								setMainState={setAppState}
								onNoteChange={handleStateChange}
								isEditing={editingState}
								cachedData={dbData}
								setCachedData={setDbData}
							/>
						) : null}
						<UserInputNav
							dateState={appState.date}
							updateDisplay={setDisplay}
							isEditing={editingState}
							closeEditer={closeEditerButton}
						/>
					</div>
					<DataTable
						fetchedData={dbData}
						edit={loadEdit}
						currentPage={page}
						setPage={setPage}
						pageCount={pageCount}
					/>
				</div>
			)}
		</>
	);
}

export default MainApp;
