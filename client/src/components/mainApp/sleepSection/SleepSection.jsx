import React, { useState } from 'react';
import Header from '../../Header';
import SaveButton from '../SaveButton';
import SleepInput from './SleepInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function SleepSection({
	napData,
	onNapChange,
	isEditing,
	tableRefresh,
	cachedData,
}) {
	const [openNap1, setOpenNap1] = useState(false);
	const [openNap2, setOpenNap2] = useState(false);

	function handleChange(e) {
		const section = 'sleep';
		const target = e.target;
		onNapChange(section, target);
		e.preventDefault();
	}

	function toggleNap1() {
		setOpenNap1(!openNap1);
	}

	function toggleNap2() {
		setOpenNap2(!openNap2);
	}

	return (
		<div id='sleepSection' className='userInputSection'>
			<Header headerText='Sleep tracker' />
			<div className='mainCardInput'>
				<div id='sleepInputContainer'>
					<SleepInput
						name='wakeUp'
						label='Wake up:'
						napData={napData.wakeUp}
						sectionData={napData}
						onChange={handleChange}
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
								napData={napData.nap1Start}
								sectionData={napData}
								onChange={handleChange}
							/>
							<SleepInput
								name='nap1End'
								label='End of nap:'
								napData={napData.nap1End}
								sectionData={napData}
								onChange={handleChange}
							/>
						</>
					)}
					{/* <br /> */}
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
								napData={napData.nap2Start}
								sectionData={napData}
								onChange={handleChange}
							/>
							<SleepInput
								name='nap2End'
								label='End of nap:'
								napData={napData.nap2End}
								sectionData={napData}
								onChange={handleChange}
							/>
						</>
					)}
					<SleepInput
						name='bedTime'
						label='Bed time:'
						napData={napData.bedTime}
						sectionData={napData}
						onChange={handleChange}
					/>
				</div>
				<SaveButton
					name='sleep'
					stateData={napData}
					isEditing={isEditing}
					tableRefresh={tableRefresh}
					cachedData={cachedData}
				/>
			</div>
		</div>
	);
}

export default SleepSection;
