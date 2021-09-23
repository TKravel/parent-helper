import { useEffect, useState, useContext } from 'react';
import { UserContext } from './UserContext';

function useSave(
	name,
	sectionData,
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

	function updateState() {
		const selection = isEditing.cacheDbDataIndex;
		setCachedData((prevValues) => {
			const replacement = cachedData[selection];

			//
			// console.log('replacemnt', replacement);
			// console.log(selection);
			// console.log('test', replacement[name]);
			// console.log('test1', sectionData);

			const result = cachedData.map((item, index) => {
				// console.log(item);
				console.log(selection);
				console.log(index, item);
				if (index === parseInt(selection)) {
					// console.log('worked');
					return { ...prevValues[index], [name]: sectionData };
				} else {
					// console.log('didnt work');
					return item;
				}
			});
			console.log('output', result);
			return result;
		}, console.log('testData: ', cachedData));
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
				console.log('Item saved');
				updateState();
				// tableRefresh();
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
					updateState();
					console.log('updated state');
					// tableRefresh();
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
