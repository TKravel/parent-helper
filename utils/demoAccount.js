const arr = require('./demoDocuments');

function formatDate(date) {
	let d = date;

	let day = d.getDate().toString();
	let month = (d.getMonth() + 1).toString();
	let year = d.getFullYear().toString().substring(2, 4);

	if (day.length === 1) {
		day = '0' + day;
	}
	if (month.length === 1) {
		month = '0' + month;
	}

	return month + day + year;
}

function last7Days() {
	var result = [];
	for (var i = 0; i < 21; i++) {
		var date = new Date();
		date.setDate(date.getDate() - i);
		result.push(formatDate(date));
	}

	return result;
}
exports.createRecords = function (id) {
	const documents = [];
	const dates = last7Days();
	console.log(arr[0]);
	for (let i = 0; i < 7; i++) {
		arr[i].date = dates[i];
		arr[i].userId = id;
		documents.push(arr[i]);
	}
	return documents;
};
