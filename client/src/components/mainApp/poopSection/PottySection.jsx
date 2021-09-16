import React from 'react';
import Counter from './Counter';
import Header from '../../Header';
import SaveButton from '../SaveButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo } from '@fortawesome/free-solid-svg-icons';
import useSave from '../../../hooks/useSave';
import validate from '../poopSection/validatePoop';

function PottySection({
	sectionData,
	onPoopChange,
	isEditing,
	tableRefresh,
	cachedData,
}) {
	const sectionName = 'poop';
	const { errors, handleSubmit } = useSave(
		sectionName,
		sectionData,
		isEditing,
		tableRefresh,
		validate
	);
	return (
		<div id='pottySection'>
			<Header headerText='Poop tracker' />
			<div className='mainCardInput'>
				<div id='poopInputContainer'>
					<div id='poopDisplay'>
						{sectionData === 0 ? (
							<>
								<p>No poop to count!</p>
								<FontAwesomeIcon icon={faPoo} id='poopIcon' />
							</>
						) : (
							<p id='countData'>{sectionData}</p>
						)}
					</div>
					<div id='poopCounterControls'>
						<Counter
							currentCount={sectionData}
							onPoopChange={onPoopChange}
						/>
					</div>
				</div>
				<SaveButton
					name='poop'
					stateData={sectionData}
					isEditing={isEditing}
					tableRefresh={tableRefresh}
					cachedData={cachedData}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	);
}

export default PottySection;
