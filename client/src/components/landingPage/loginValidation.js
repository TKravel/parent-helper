export default function validate(values) {
	let errors = {};

	// UserName validation
	if (!values.username) {
		errors.username = 'Username required!';
	}

	// Password validation
	if (!values.password) {
		errors.password = 'Password required!';
	} else if (values.password.length < 6) {
		errors.password = 'Passwords are at least 6 digits.';
	}

	return errors;
}
