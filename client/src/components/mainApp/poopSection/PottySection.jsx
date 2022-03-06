import React from 'react';
import { Counter } from './Counter';
import { SectionHeader } from '../../SectionHeader';
import SaveButton from '../SaveButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo } from '@fortawesome/free-solid-svg-icons';
import { useSave } from '../../../hooks/useSave';
import validate from '../poopSection/validatePoop';
import { useSelector } from 'react-redux';

export const PottySection = ({ isEditing }) => {
	const sectionName = 'poop';
	const day = isEditing.dataIndex;
	const poopData = useSelector((state) => state.days.data.arr[day].poop);
	const { errors, handleSubmit } = useSave(
		sectionName,
		poopData,
		isEditing,
		validate
	);

	if (errors) {
		console.log(errors);
	}

	return (
		<div id='pottySection'>
			<SectionHeader headerText='Poop tracker' />
			<div className='mainCardInput'>
				<div id='poopInputContainer'>
					<div id='poopDisplay'>
						{poopData === 0 ? (
							<>
								<p>No poop to count!</p>
								<FontAwesomeIcon icon={faPoo} id='poopIcon' />
							</>
						) : (
							<p id='countData'>{poopData}</p>
						)}
					</div>
					<div id='poopCounterControls'>
						<Counter
							currentCount={poopData}
							isEditing={isEditing}
							handleSubmit={handleSubmit}
						/>
					</div>
				</div>
				{/* <SaveButton
					name='poop'
					sectionData={poopData}
					isEditing={isEditing}
					handleSubmit={handleSubmit}
				/> */}
			</div>
		</div>
	);
};
