const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DaysTrackerSchema = new Schema({
    date: String,
    food: [String],
    poop: Number,
    sleep: {
        wakeUp: String,
        firstNapStart: String,
        firstNapEnd: String,
        secondNapStart: String,
        secondNapEnd: String,
        bedTime: String
    },
    notes: [String]
})

const DayTracker = mongoose.model('DayTracker', DaysTrackerSchema);

module.exports = DayTracker;