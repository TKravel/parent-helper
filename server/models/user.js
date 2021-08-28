const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: String,
    email: String,
    password: String
})

const User = mongoose.model('user', UsersSchema);

module.exports = User; 
