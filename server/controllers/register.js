require('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Schema/users');
const router = express.Router();

router.post('/register', hashPass, async (req, res) => {
    const { username, password, rePassword } = req.body

    if (password !== rePassword) {
        res.status(401).json({ error: "Password does not match" })
    } else {
        const user = await User.create({ username, password: req.hash, connections: [] })
        jwt.sign({ token: user._id }, process.env.JWT_SECRET, function(err, token) {
            res.status(200).json({ info: "Registered successfully!", token })
        })
    }
})

function hashPass(req, res, next) {
    const { password } = req.body

    bcrypt.hash(password, 8, function(err, hash) {
        req.hash = hash
        next()
    })
}

module.exports = router