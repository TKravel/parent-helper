const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const PORT = 3001;
const DayTracker = require('./models/dayTracker');

const dayTrackerRouter = require('./routes/dayTracker');

const app = express();


// Connect to DB
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://appuser:${process.env.DBPASS}@cluster0.quq1t.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to DB")
});

// app.use('/api', dayTrackerRouter);

app.get('/api/loadData', (req, res) => {
  // res.send("hello")
  DayTracker.find({}, function(err, arr){
      res.json(arr)
  })
  
})

app.get("/api/data", (req, res) => {
    res.json(appData)
})

app.listen(PORT, () => {
    console.log("Server running on port 3001");
})

const appData = [
    {
        date: "8/4/21",
        food: ["pancakes", "nuts", "yogurt"],
        poop: 1,
        sleep: {
          wakeUp: '06:20',
          firstNapStart: '10:00',
          firstNapEnd: '11:20',
          secondNapStart: '14:30',
          secondNapEnd: '15:40',
          bedTime: '21:30'
        },
        notes: ["Tylenol"]
      },
      {
        date: "8/3/21",
        food: ["apples", "hot dog"],
        poop: 0,
        sleep: {
          wakeUp: '07:00',
          firstNapStart: '09:40',
          firstNapEnd: '11:45',
          secondNapStart: '00:00',
          secondNapEnd: '00:00',
          bedTime: '19:45'
        },
        notes: []
      },
      {
        date: "8/2/21",
        food: ["oatmeal"],
        poop: 3,
        sleep: {
          wakeUp: '05:20',
          firstNapStart: '09:50',
          firstNapEnd: '11:10',
          secondNapStart: '14:30',
          secondNapEnd: '16:00',
          bedTime: '19:00'
        },
        notes: ["Miralax", "tylenol"]
      }
]

// DayTracker.insertMany(appData, function(err, docs){
//   if(err){
//     console.log(err)
//   }
// })