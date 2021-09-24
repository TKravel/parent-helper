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

// Get user data
router.post('/userData', verify, async (req, res) => {
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

	// Search for todays document, create if needed
	const query = { date: dateQuery, userId: Id },
		update = { date: dateQuery, userId: Id },
		options = { upsert: true, new: true, setDefaultsOnInsert: true };

	await DayTracker.findOneAndUpdate(
		query,
		update,
		options,
		async function (err, result) {
			if (err) {
				console.log(err);
			} else {
				// Find current user documents, return a page
				const user = req.id;
				const page = req.body.page - 1;
				const limit = 7;

				const count = await DayTracker.countDocuments({ userId: user });
				console.log(count);
				DayTracker.find({ userId: user }, function (err, arr) {
					if (err) {
						console.log(err);
					} else if (arr.length === 0) {
						res.send('no data');
					} else {
						console.log('Table Loaded');
						res.json({ arr: arr, count: count });
					}
				})
					.skip(page * limit)
					.limit(limit)
					.sort({ date: 'desc' });
			}
		}
	);
});

// Save current days data return update

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
		{ new: true },
		function (err, update) {
			if (err) {
				console.log(err);
			} else if (update === null) {
				console.log('no document');
				res.send('No document found');
			} else {
				console.log('Item saved: ', update);
				res.json({ document: update });
			}
		}
	);
});

// Edit past days return update

router.post('/userInputEdit', verify, (req, res, next) => {
	const key = req.body.name;
	const data = req.body.data;
	const dayID = req.body.id;
	const user = req.id;

	DayTracker.findOneAndUpdate(
		{ _id: dayID, userId: user },
		{ [key]: data },
		{ new: true },
		function (err, update) {
			if (err) {
				console.log('error');
				console.log(err);
			} else if (!update) {
				console.log('No records found');
			} else {
				console.log(update);
				console.log('Document updated:');
				res.json({ document: update });
			}
		}
	);
});

// // Delete list data

// router.delete('/userInputDelete', verify, (req, res) => {
// 	const DocId = req.body.id;
// 	const arr = req.body.arr;
// 	const index = req.body.itemIndex;
// 	const Id = req.id;
// 	DayTracker.findOneAndUpdate(
// 		{ id: DocId, userId: id },
// 		function (err, result) {
// 			if (err) {
// 				console.log(err);
// 			} else if (result) {
// 				const removedItem = result[arr].splice(index, 1);
// 				result.save(function (err) {
// 					if (err) {
// 						console.log(err);
// 					} else {
// 						console.log('item removed');
// 						res.send(result);
// 					}
// 				});
// 			}
// 		}
// 	);
// });

module.exports = router;
