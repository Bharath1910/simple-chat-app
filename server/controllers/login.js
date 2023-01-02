const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../Schema/users');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/login', async (req, res) => {
    if (req.body.token) {
        jwt.verify(req.body.token, process.env.JWT_SECRET, async function(error, token) {
            if (error) {
                res.status(401).json({ error: "Cookie cannot be verified" })
            } else {
                const user = await User.findById(token)
                if (user) {
                    res.status(200).json({ info: "Logged in successfully" })
                }
            }
        })
    } else {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        console.log(user._id.toString())
    
        bcrypt.compare(password, user.password, function(err, result) {
            if (result) {
                const token = jwt.sign(user._id.toString(), process.env.JWT_SECRET)
                res.status(200).json({ info: "Logged in", token })
            } else {
                res.status(403).json({ error: "Wrong Password, please try again" })
            }
        })
    }
})

module.exports = router