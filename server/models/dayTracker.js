const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DaysTrackerSchema = new Schema({
	date: { type: String, default: '' },
	food: { type: [String], default: [] },
	poop: { type: Number, default: 0 },
	sleep: {
		wakeUp: { type: String, default: '00:00' },
		nap1Start: { type: String, default: '00:00' },
		nap1End: { type: String, default: '00:00' },
		nap2Start: { type: String, default: '00:00' },
		nap2End: { type: String, default: '00:00' },
		bedTime: { type: String, default: '00:00' },
	},
	notes: { type: [String], default: [] },
	userId: { type: String, required: true },
});

const DayTracker = mongoose.model('DayTracker', DaysTrackerSchema);

module.exports = DayTracker;
