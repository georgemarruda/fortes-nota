const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsertSchema = new Schema({
    email: String,
    password: String
});

module.exports = mongoose.model('User', UsertSchema)