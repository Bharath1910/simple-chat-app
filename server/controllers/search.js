const express = require('express');
const User = require('../Schema/users');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/search', async (req,res) => {
    const users = await User.find({ username: { $regex: `^${req.query.query}`, $options: 'i' } })

    if (users.length !== 0) {
        const usersList = users.map((user) => user.username)
        res.status(200).json({ usersList })
    } else {
        res.status(200).json({ info: "No users found" })
    }
})

module.exports = router