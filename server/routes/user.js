const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();


router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    User.findOne({username: [username]}, function(err, result){
        if(err){
            console.log(err)
        }
        if(!result){
            res.send({message: "User does not exist"});
        } else {
            console.log(result.password)
            console.log(password)
            bcrypt.compare(password, result.password, function(err, responce) {
                console.log(responce)
                if(err){
                    res.json({err: err})
                } 
                if(!responce){
                    res.send({message: "Username or password incorrect"});
                }
                else {
                    res.send({user: result.id});
                }
            });
        }
    })
})

router.post('/createUser', (req, res) => {
    const { username, email, email2, password, password2} = req.body;

    User.findOne({username: [username]}, function(err, result){
        if(err){
            res.send({err: err})
        } else if(result){
            res.send({message: 'User already exists'})
        } else if (!result){
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    if(err){
                        res.send({err: err})
                    } else {
                        const user = new User({
                            username: username,
                            email: email,
                            password: hash
                        })
                        user.save();
                        res.send("User created");
                    }
                    
                });
            });
        }
    })
})

module.exports = router;