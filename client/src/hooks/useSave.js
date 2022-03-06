import { useEffect, useState, useContext, useCallback } from 'react';
import { UserContext } from './UserContext';
import { saveData } from '../features/daysSlice';
import { useDispatch } from 'react-redux';

export const useSave = (name, sectionData, isEditing, validate) => {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { user } = useContext(UserContext);

	// Dispatches call to save data to server
	const handleSave = useCallback(() => {
		const data = {
			auth: user.auth,
			name: [name],
			id: isEditing.id,
			data: sectionData,
		};
		dispatch(saveData(data));
	}, [dispatch, user.auth, isEditing.id, sectionData, name]);

	// Save to database or return obj of errors
	const saveIfPassesValidation = useCallback(() => {
		const test = validate({ sectionData });
		if (Object.keys(test).length === 0 && isSubmitting) {
			handleSave();
			setIsSubmitting(false);
		} else {
			setErrors(validate(sectionData));
			setIsSubmitting(false);
		}
	}, [validate, handleSave, isSubmitting, sectionData]);

	// Watch for submitting data, pass to validation function
	useEffect(() => {
		saveIfPassesValidation();
	}, [isSubmitting, saveIfPassesValidation]);

	// Clear errors, set submitting state to start validation / db call
	const handleSubmit = () => {
		setErrors({});
		setIsSubmitting(true);
	};

	return { errors, handleSubmit };
};
