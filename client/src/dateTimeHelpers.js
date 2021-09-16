function displayDate(input) {
	const month = input.slice(0, 2);
	const day = input.slice(2, 4);
	const year = input.slice(4, 6);
	return month + '/' + day + '/' + year;
}

function getCurrentDate() {
	const date = new Date();
	let month = (date.getMonth() + 1).toString();
	let day = date.getDate().toString();
	const year = date.getFullYear().toString().substring(2, 4);

	if (month.length === 1) {
		month = '0' + month;
	}
	if (day.length === 1) {
		day = '0' + day;
	}

	return month + '/' + day + '/' + year;
}

// Time helpers

function convertTo12HR(time) {
	let [hours, minutes] = time.split(':');
	const AmOrPm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12 || 12;
	return hours + ':' + minutes + ' ' + AmOrPm;
}

function calcNapTime(t1, t2) {
	if (t1 === '00:00' || t2 === '00:00' || t1 === t2) {
		return '-';
	}
	const time1 = t1.split(':');
	const time2 = t2.split(':');
	const date1 = new Date(0, 0, 0, time1[0], time1[1]);
	const date2 = new Date(0, 0, 0, time2[0], time2[1]);
	const elapsed = date2 - date1;
	const minutes = elapsed / 1000 / 60;
	const hours = Math.floor(minutes / 60);

	if (hours === 0 && minutes === 0) {
		return '-';
	} else if (hours === 0) {
		return (minutes % 60) + ' mins';
	} else if (hours === 1) {
		return hours + ' hr ' + (minutes % 60) + ' mins';
	} else {
		return hours + ' hr ' + (minutes % 60) + ' mins';
	}
}

export { displayDate, getCurrentDate, convertTo12HR, calcNapTime };
