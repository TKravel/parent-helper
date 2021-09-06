const express = require('express');
const router = express.Router();
const DayTracker = require('../models/dayTracker');
const jwt = require('jsonwebtoken');

// Verify users JWT token
function verify(req, res, next) {
	if (req.headers['authorization'] === undefined) {
		return res.send('No token');
	} else {
		const token = req.headers['authorization'];
		jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
			if (err) {
				console.log('bad Token');
				console.log(err);
				res.json({ error: 'Can not be verified' });
			} else {
				console.log('good token');
				req.id = decoded.id;
			}
		});
	}
	return next();
}

// GET data for table

router.get('/loadTable', verify, (req, res, next) => {
	const user = req.id;
	DayTracker.find({ userId: user }, function (err, arr) {
		if (err) {
			console.log(err);
		} else {
			console.log('Table Loaded');
			res.json({ arr: arr });
		}
	}).sort({ date: 'desc' });
});

// Load todays data, create if none

router.get('/loadLog', verify, (req, res) => {
	// Get/format date for search
	const currentDate = new Date();

	let month = (currentDate.getMonth() + 1).toString();
	let day = currentDate.getDate().toString();
	let year = currentDate.getFullYear().toString();

	if (month.length === 1) {
		month = '0' + month;
	}
	if (day.length === 1) {
		day = '0' + day;
	}

	const dateQuery = month + day + year.substring(2, 4);

	const Id = req.id;

	const query = { date: dateQuery, userId: Id },
		update = { date: dateQuery, userId: Id },
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

// Save current days data

router.post('/userInputSave', verify, (req, res, next) => {
	const currentDate = new Date();

	let month = (currentDate.getMonth() + 1).toString();
	let day = currentDate.getDate().toString();
	let year = currentDate.getFullYear().toString();

	if (month.length === 1) {
		month = '0' + month;
	}
	if (day.length === 1) {
		day = '0' + day;
	}

	let dateQuery = month + day + year.substring(2, 4);

	const key = req.body.name;
	const data = req.body.data;
	const id = req.id;

	DayTracker.findOneAndUpdate(
		{ date: dateQuery, userId: id },
		{ [key]: data },
		function (err, update) {
			if (err) {
				console.log(err);
			} else if (update === null) {
				console.log('no document');
				res.send('No document found');
			} else {
				res.send(update);
				console.log('Item saved');
			}
		}
	);
});

// EDIT past days

router.post('/userInputEdit', verify, (req, res, next) => {
	const key = req.body.name;
	const data = req.body.data;
	const dayID = req.body.id;
	const user = req.id;

	DayTracker.findOneAndUpdate(
		{ _id: dayID, userId: user },
		{ [key]: data },
		function (err, update) {
			if (err) {
				console.log('error');
				console.log(err);
			} else if (!update) {
				console.log('No records found');
			} else {
				console.log(update);
				console.log('Document updated:');
				res.json({ update: update });
			}
		}
	);
});

// DELETE list data

router.delete('/userInputDelete', verify, (req, res) => {
	const DocId = req.body.id;
	const arr = req.body.arr;
	const index = req.body.itemIndex;
	const Id = req.id;
	DayTracker.findOneAndUpdate(
		{ id: DocId, userId: id },
		function (err, result) {
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
		}
	);
});

module.exports = router;
