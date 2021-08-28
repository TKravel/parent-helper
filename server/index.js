const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const PORT = 3001;
const dayTrackerRouter = require('./routes/dayTracker');
const userRouter = require('./routes/user')


const app = express();


// Connect to DB
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://appuser:${process.env.DBPASS}@cluster0.quq1t.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to DB")
});

app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use('/api', dayTrackerRouter);
app.use('/users', userRouter);



app.get("/api/data", (req, res) => {
    res.json(appData)
})

app.listen(PORT, () => {
    console.log("Server running on port 3001");
})
