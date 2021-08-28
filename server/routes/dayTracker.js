const express = require('express');
const router = express.Router();
const DayTracker = require('../models/dayTracker');

// GET data

router.get('/loadTable', (req, res) => {
	DayTracker.find({}, function (err, arr) {
		if (err) {
			console.log(err);
		} else {
			console.log('Table Loaded');
			res.json(arr);
		}
	}).sort({ date: 'desc' });
});

router.post('/loadEdit', (req, res) => {
	const dayID = req.body.id;

	DayTracker.findById(dayID, function (err, day) {
		if (err) {
			console.log(err);
		} else {
			res.json(day);
		}
	});
});

// User input routes

router.get('/loadLog', (req, res) => {
	// Get date format it for search
	const currentDate = new Date();
	const [month, day, year] = [
		(currentDate.getMonth() + 1).toString(),
		currentDate.getDate().toString(),
		currentDate.getFullYear().toString(),
	];

	let dateQuery = '';
	if (month.length === 1) {
		dateQuery = '0' + month + day + year.substring(2, 4);
	} else {
		dateQuery = month + day + year.substring(2, 4);
	}

	const query = { date: dateQuery },
		update = { date: dateQuery },
		options = { upsert: true, new: true, setDefaultsOnInsert: true };

	DayTracker.findOneAndUpdate(query, update, options, function (err, result) {
		if (err) {
			console.log(err);
		} else {
			res.json(result);
			console.log('Log returned');
		}
	});
});

// POST data

router.post('/userInputSave', (req, res) => {
	const currentDate = new Date();
	const [month, day, year] = [
		(currentDate.getMonth() + 1).toString(),
		currentDate.getDate().toString(),
		currentDate.getFullYear().toString(),
	];

	let dateQuery = '';
	if (month.length === 1) {
		dateQuery = '0' + month + day + year.substring(2, 4);
	} else {
		dateQuery = month + day + year.substring(2, 4);
	}

	const key = req.body.name;
	const data = req.body.data;
	DayTracker.findOneAndUpdate(
		{ date: dateQuery },
		{ [key]: data },
		function (err, update) {
			if (err) {
				console.log(err);
			} else {
				res.send(update);
				console.log('Item saved');
			}
		}
	);
});

// UPDATE data

router.post('/userInputEdit', (req, res) => {
	const key = req.body.name;
	const data = req.body.data;
	const dayID = req.body.id;

	DayTracker.findByIdAndUpdate(
		dayID,
		{ [key]: data },
		function (err, update) {
			if (err) {
				console.log(err);
			} else {
				console.log('Document updated:');
				res.json(update);
			}
		}
	);
});

// DELETE data

router.delete('/userInputDelete', (req, res) => {
	const id = req.body.id;
	const arr = req.body.arr;
	const index = req.body.itemIndex;
	console.log(id, arr, index);
	DayTracker.findById(id, function (err, result) {
		if (err) {
			console.log(err);
		} else if (result) {
			const removedItem = result[arr].splice(index, 1);
			result.save(function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log('item removed');
					res.send(result);
				}
			});
		}
	});
});

module.exports = router;
