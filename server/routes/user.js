const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
	const { username, password } = req.body;
	console.log(username, password);
	User.findOne({ username: [username] }, function (err, result) {
		if (err) {
			return console.log(err);
		}
		if (!result) {
			return res.json({ message: 'User does not exist' });
		} else {
			bcrypt.compare(password, result.password, function (err, responce) {
				if (err) {
					res.send({ err: err });
				}
				if (!responce) {
					res.json({
						message: 'Username or password incorrect',
					});
				} else {
					const token = jwt.sign(
						{ id: result._id },
						process.env.JWT_SECRET
					);
					res.send({ token: token });
				}
			});
		}

		// console.log(token);
	});
});

router.post('/createUser', async (req, res) => {
	const { username, email, email2, password, password2 } = req.body;

	await User.findOne({ username: [username] }, function (err, result) {
		if (err) {
			res.json({ err: err });
		} else if (result) {
			res.json({ message: 'User already exists' });
		} else if (!result) {
			bcrypt.genSalt(10, function (err, salt) {
				bcrypt.hash(password, salt, function (err, hash) {
					if (err) {
						res.json({ err: err });
					} else {
						const newUser = new User({
							username: username,
							email: email,
							password: hash,
						});
						newUser.save();
						const token = jwt.sign(
							{ id: newUser._id },
							process.env.JWT_SECRET
						);
						res.json({ token: token });
					}
				});
			});
		}
	});
});

module.exports = router;
