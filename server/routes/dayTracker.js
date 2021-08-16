const express = require('express');
const router = express.Router();
const DayTracker = require('../models/dayTracker');

// GET data

router.get('/loadTable', (req, res) => {
    // res.send("hello")
    DayTracker.find({}, function(err, arr){
        if(err){
            console.log(err)
        } else {
            res.json(arr)
        }
        
    }).sort({ date: 'desc' });
    
})

// User input routes

router.get('/loadLog', (req, res) => {
    // Get date format it for search
    const currentDate = new Date();
    const [ month, day , year ] = [
        (currentDate.getMonth() + 1).toString(),
        currentDate.getDate().toString(),
        currentDate.getFullYear().toString()
    ];
    
    let dateQuery = "";
    if(month.length === 1){
        dateQuery = "0" + month + day + year.substring(2,4)
    } else {
        dateQuery = month + day + year.substring(2,4)
    }

    const query = {date: dateQuery},
        update = {date: dateQuery},
        options = { upsert: true, new: true, setDefaultsOnInsert: true };
    
    DayTracker.findOneAndUpdate(query, update, options, function(err, result){
        if(err){
            console.log(err)
        } else {
            res.json(result);
        }
    })
})

// POST data

router.post('/userInput', (req, res) => {
    const currentDate = new Date();
    const [ month, day , year ] = [
        (currentDate.getMonth() + 1).toString(),
        currentDate.getDate().toString(),
        currentDate.getFullYear().toString()
    ];
    
    let dateQuery = "";
    if(month.length === 1){
        dateQuery = "0" + month + day + year.substring(2,4)
    } else {
        dateQuery = month + day + year.substring(2,4)
    }

    const key = req.body.name;
    const data = req.body.data;
    DayTracker.findOneAndUpdate({ date: dateQuery }, { [key]: data}, function(err, update){
        if(err){
            console.log(err);
        } else {
            console.log("Document updated");
        }
    })
})

// UPDATE data

// DELETE data

module.exports = router;