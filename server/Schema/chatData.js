const mongoose = require('mongoose');

const ChatData = new mongoose.Schema({
    fromUser: String,
    toUser: String,
    chatData: Object
})

module.exports = mongoose.model('chatdata', ChatData);