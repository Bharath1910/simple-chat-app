import mongoose from 'mongoose';

const User = new mongoose.Schema({
    username: String,
    password: String,
    connections: Array
})

module.exports = mongoose.model("user", User);