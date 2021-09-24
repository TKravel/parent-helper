const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const dayTrackerRouter = require('./routes/dayTracker');
const userRouter = require('./routes/user');
const path = require('path');

const app = express();

// Connect to DB
const mongoose = require('mongoose');
mongoose.connect(
	`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.quq1t.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
	{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('Connected to DB');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());
app.use('/api', dayTrackerRouter);
app.use('/users', userRouter);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
	console.log('Server running on port 3001');
});
