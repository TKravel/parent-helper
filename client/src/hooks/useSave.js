import { useEffect, useState, useContext } from 'react';
import { UserContext } from './UserContext';

function useSave(
	name,
	sectionData,
	setMainState,
	cachedData,
	setCachedData,
	isEditing,
	validate
) {
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
		e.preventDefault();
		setType(e.target.name);
		setErrors({});
		setErrors(validate({ sectionData }));
		console.log(errors);
		setIsSubmitting(true);
	}

	function updateState(doc) {
		const selection = isEditing.cacheDbDataIndex;
		setCachedData((prevValues) => {
			const result = cachedData.map((item, index) => {
				if (index === parseInt(selection)) {
					return { ...prevValues[index], [name]: sectionData };
				} else {
					return item;
				}
			});
			return result;
		});
		setMainState(doc);
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
				if (data.document) {
					console.log('Item saved');
					updateState(data.document);
				}
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
				if (data.document) {
					updateState(data.document);
					console.log('updated state');
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
