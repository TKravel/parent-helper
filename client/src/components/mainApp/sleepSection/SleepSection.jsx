import React, { useState } from 'react';
import { SectionHeader } from '../../SectionHeader';
import { SleepInput } from './SleepInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import validate from './validateSleep';
import { useSave } from '../../../hooks/useSave';
import { useSelector, useDispatch } from 'react-redux';
import { editSleep } from '../../../features/daysSlice';

export const SleepSection = ({ isEditing }) => {
	const sectionName = 'sleep';
	const dispatch = useDispatch();
	const dayIndex = isEditing.dataIndex;
	const sleepData = useSelector(
		(state) => state.days.data.arr[dayIndex].sleep
	);
	const { errors, handleSubmit } = useSave(
		sectionName,
		sleepData,
		isEditing,
		validate
	);
	const [openNap1, setOpenNap1] = useState(false);
	const [openNap2, setOpenNap2] = useState(false);

	const handleChange = (e) => {
		const selectedNap = e.target.name;
		const value = e.target.value;
		dispatch(editSleep({ day: dayIndex, item: { [selectedNap]: value } }));
	};

	const toggleNap1 = () => {
		setOpenNap1(!openNap1);
	};

	const toggleNap2 = () => {
		setOpenNap2(!openNap2);
	};

	return (
		<div id='sleepSection' className='userInputSection'>
			<SectionHeader headerText='Sleep tracker' />
			<div className='mainCardInput'>
				<div id='sleepInputContainer'>
					<SleepInput
						name='wakeUp'
						label='Wake up:'
						napData={sleepData.wakeUp}
						onChange={handleChange}
						handleSubmit={handleSubmit}
					/>
					{openNap1 === false ? (
						<button onClick={toggleNap1} className='addNapBtn'>
							Add nap
						</button>
					) : (
						<>
							<button onClick={toggleNap1} className='minNapBtn'>
								1st nap{' '}
								<FontAwesomeIcon
									icon={faTimes}
									className='minIcon'
								/>
							</button>
							<SleepInput
								name='nap1Start'
								label='Start of nap:'
								napData={sleepData.nap1Start}
								onChange={handleChange}
								handleSubmit={handleSubmit}
							/>
							{errors.nap1Start && (
								<p className='errorMessage'>
									{errors.nap1Start}
								</p>
							)}
							<SleepInput
								name='nap1End'
								label='End of nap:'
								napData={sleepData.nap1End}
								onChange={handleChange}
								handleSubmit={handleSubmit}
							/>
							{errors.nap1End && (
								<p className='errorMessage'>{errors.nap1End}</p>
							)}
						</>
					)}
					{openNap2 === false ? (
						<button onClick={toggleNap2} className='addNapBtn'>
							Add nap
						</button>
					) : (
						<>
							<button onClick={toggleNap2} className='minNapBtn'>
								2nd nap{' '}
								<FontAwesomeIcon
									icon={faTimes}
									className='minIcon'
								/>
							</button>
							<SleepInput
								name='nap2Start'
								label='Start of nap:'
								napData={sleepData.nap2Start}
								onChange={handleChange}
								handleSubmit={handleSubmit}
							/>
							{errors.nap2Start && (
								<p className='errorMessage'>
									{errors.nap2Start}
								</p>
							)}
							<SleepInput
								name='nap2End'
								label='End of nap:'
								napData={sleepData.nap2End}
								onChange={handleChange}
								handleSubmit={handleSubmit}
							/>
							{errors.nap2End && (
								<p className='errorMessage'>{errors.nap2End}</p>
							)}
						</>
					)}
					<SleepInput
						name='bedTime'
						label='Bed time:'
						napData={sleepData.bedTime}
						onChange={handleChange}
						handleSubmit={handleSubmit}
					/>
					{errors.bedTime && (
						<p className='errorMessage'>{errors.bedTime}</p>
					)}
				</div>
			</div>
		</div>
	);
};
