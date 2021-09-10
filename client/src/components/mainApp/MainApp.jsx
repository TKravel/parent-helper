import React, { useState, useEffect, useContext } from 'react';
import FoodSection from './foodSection/FoodSection';
import SleepSection from './sleepSection/SleepSection';
import PottySection from './poopSection/PottySection';
import NotesSection from './notesSection/NotesSection';
import UserInputNav from './userInputNav';
import DataTable from './dataTable/DataTable';
import Footer from '../Footer';
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

library.add(faPlus, faMinus, faEdit, faTimes, faExpand);

function MainApp() {
	const { user } = useContext(UserContext);
	// Section display state

	const [display, setDisplay] = useState({
		foodSection: true,
		sleepSection: false,
		pottySection: false,
		notesSection: false,
	});

	const [appState, setAppState] = useState({
		date: '',
		food: [],
		sleep: {
			wakeUp: '00:00',
			nap1Start: '00:00',
			nap1End: '00:00',
			nap2Start: '00:00',
			nap2End: '00:00',
			bedTime: '00:00',
		},
		poop: 0,
		notes: [],
	});

	const [dbData, setDbData] = useState([]);

	const [loading, setLoading] = useState({
		todayData: true,
		pastData: true,
	});

	const [editingState, setEditingState] = useState({
		status: false,
		changes: false,
		date: '',
		id: '',
		cacheDbDataIndex: 0,
		reloadTable: 0,
	});

	function refreshTableUpdates() {
		setEditingState((prevValues) => {
			return {
				...prevValues,
				reloadTable: prevValues.reloadTable + 1,
			};
		});
	}

	function handleEditing(status, date, id) {
		setEditingState({
			status: status,
			date: date,
			id: id,
		});
	}

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
		fetch('/api/loadLog', {
			method: 'GET',
			headers: {
				authorization: user.auth,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setAppState({
					date: data.date,
					food: data.food,
					sleep: data.sleep,
					poop: data.poop,
					notes: data.notes,
				});
				setLoading((prevValue) => {
					return {
						...prevValue,
						todayData: false,
					};
				});
			});
	}, [user.auth]);

	useEffect(() => {
		fetch('/api/loadTable', {
			method: 'GET',
			headers: {
				authorization: user.auth,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setDbData(() => {
					return data.arr;
				});
				setLoading((prevValue) => {
					return {
						...prevValue,
						pastData: false,
					};
				});
			});
	}, [editingState.reloadTable, user.auth]);

	function loadEdit(e) {
		const currentDate = getCurrentDate().replace(/\//g, '');
		if (e.target) {
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
							changes: false,
							date: clone.date,
							id: clone._id,
							cacheDbDataIndex: index,
							reloadTable: prevValue.reloadTable,
						};
				  })
				: setEditingState((prevValue) => {
						return {
							status: true,
							changes: false,
							date: clone.date,
							id: clone._id,
							cacheDbDataIndex: index,
							reloadTable: prevValue.reloadTable,
						};
				  });
		} else {
			const clone = JSON.parse(JSON.stringify(dbData[0]));
			setAppState({
				date: clone.date,
				food: clone.food,
				sleep: clone.sleep,
				poop: clone.poop,
				notes: clone.notes,
			});
			setEditingState((prevValue) => {
				return {
					status: false,
					changes: false,
					date: clone.date,
					id: clone._id,
					cacheDbDataIndex: 0,
					reloadTable: prevValue.reloadTable,
				};
			});
		}
	}

	function closeEditerButton() {
		loadEdit(dbData[0]);
	}

	return (
		<>
			{loading.pastData ? (
				<div className='loaderContainer'>
					<Loader
						className='loader'
						type='TailSpin'
						color='#00BFFF'
						height={100}
						width={100}
						// timeout={3000} //3 secs
					/>
				</div>
			) : (
				<>
					<div className='container'>
						{display.foodSection && !loading.todayData ? (
							<FoodSection
								foodData={appState.food}
								onFoodChange={handleStateChange}
								isEditing={editingState}
								tableRefresh={refreshTableUpdates}
								cachedData={dbData}
							/>
						) : null}
						{display.sleepSection ? (
							<SleepSection
								napData={appState.sleep}
								onNapChange={handleStateChange}
								isEditing={editingState}
								tableRefresh={refreshTableUpdates}
								cachedData={dbData}
							/>
						) : null}
						{display.pottySection ? (
							<PottySection
								poopData={appState.poop}
								onPoopChange={handleStateChange}
								isEditing={editingState}
								tableRefresh={refreshTableUpdates}
								cachedData={dbData}
							/>
						) : null}
						{display.notesSection ? (
							<NotesSection
								noteData={appState.notes}
								onNoteChange={handleStateChange}
								isEditing={editingState}
								tableRefresh={refreshTableUpdates}
								cachedData={dbData}
							/>
						) : null}
						<UserInputNav
							updateDisplay={setDisplay}
							isEditing={editingState}
							setEditingState={handleEditing}
							closeEditer={closeEditerButton}
						/>
					</div>
					<div id='tableContainer'>
						<DataTable fetchedData={dbData} edit={loadEdit} />
					</div>
					<Footer />)
				</>
			)}
		</>
	);
}

export default MainApp;
