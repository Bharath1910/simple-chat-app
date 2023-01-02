const mongoose = require('mongoose');

const ChatData = new mongoose.Schema({
    users: Array,
    chatData: Array
})

module.exports = mongoose.model('chatdata', ChatData);