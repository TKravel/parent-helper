export default function validate(values) {
	let errors = {};

	if (!values.username) {
		errors.username = 'Username required';
	}

	if (!values.email) {
		errors.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Invalid Email';
	}

	if (!values.email2) {
		errors.email2 = 'Input required';
	} else if (values.email !== values.email2) {
		errors.email2 = 'Emails do not match';
	}

	if (!values.password) {
		errors.password = 'Password Required';
	} else if (values.password < 6) {
		errors.password = 'Password must be at least 6 digits';
	}

	if (!values.password2) {
		errors.password2 = 'Input required';
	} else if (values.password !== values.password2) {
		errors.password2 = 'Passwords do not match';
	}

	return errors;
}
