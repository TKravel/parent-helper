export default function validate(values) {
	let errors = {};

	if (!values.userName) {
		errors.userName = 'Username required';
		errors.userNameMargin = { marginBottom: '2px' };
	}

	if (!values.email) {
		errors.email = 'Email required';
		errors.emailMargin = { marginBottom: '2px' };
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Invalid Email';
		errors.emailMargin = { marginBottom: '2px' };
	}

	if (!values.email2) {
		errors.email2 = 'Input required';
		errors.email2Margin = { marginBottom: '2px' };
	} else if (values.email !== values.email2) {
		errors.email2 = 'Emails do not match';
		errors.email2Margin = { marginBottom: '2px' };
	}

	if (!values.password) {
		errors.password = 'Password Required';
		errors.passwordMargin = { marginBottom: '2px' };
	} else if (values.password < 6) {
		errors.password = 'Password must be at least 6 digits';
		errors.passwordMargin = { paddingBottom: '2px' };
	}

	if (!values.password2) {
		errors.password2 = 'Input required';
		errors.password2Margin = { marginBottom: '2px' };
	} else if (values.password !== values.password2) {
		errors.password2 = 'Passwords do not match';
		errors.password2Margin = { marginBottom: '2px' };
	}

	return errors;
}
