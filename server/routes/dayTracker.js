const express = require('express');
const Router = express.Router();
const DayTracker = require('../models/dayTracker');

// GET data

Router.get('/api/loadData', (res, req) => {
    res.send("hello")
    DayTracker.find({}, function(err, arr){
        console.log(arr)
    })
    
})

// POST data

Router.post('/api/foodSection', (res, req) => {
    console.log("test");
})

Router.post('/api/sleepSection', (res, req) => {
    console.log("test");
})

Router.post('/api/poopSection', (res, req) => {
    console.log("test");
})

Router.post('/api/noteSection', (res, req) => {
    console.log("test");
})

// UPDATE data

// DELETE data

module.exports = Router;