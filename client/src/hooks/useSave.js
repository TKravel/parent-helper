import { useEffect, useState, useContext } from 'react';
import { UserContext } from './UserContext';

function useSave(name, sectionData, isEditing, tableRefresh, validate) {
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [type, setType] = useState('');
	const { user } = useContext(UserContext);

	useEffect(() => {
		setErrors(validate({ sectionData }));
		if (Object.keys(errors).length === 0 && isSubmitting) {
			setIsSubmitting(false);
			type === 'save' ? handleSave() : handleEdit();
		} else {
			setIsSubmitting(false);
		}
	}, [isSubmitting, type, sectionData]);

	function handleSubmit(e) {
		console.log('click');
		e.preventDefault();
		console.log('submitted');
		setType(e.target.name);
		setErrors({});
		setErrors(validate({ sectionData }));
		console.log(errors);
		setIsSubmitting(true);
	}

	function handleSave() {
		let userToken;
		if (user) {
			userToken = user.auth;
		}
		const data = {
			name: [name],
			data: sectionData,
		};
		console.log(sectionData);
		fetch('api/userInputSave', {
			method: 'POST',
			headers: {
				authorization: userToken,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Item saved:', data);
				tableRefresh();
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	function handleEdit() {
		let userToken;
		if (user) {
			userToken = user.auth;
		}
		const data = {
			name: [name],
			data: sectionData,
			id: isEditing.id,
		};

		fetch('api/userInputEdit', {
			method: 'POST',
			headers: {
				authorization: userToken,
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					tableRefresh();
				} else {
					console.log('no data');
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	return { errors, handleSubmit };
}

export default useSave;
