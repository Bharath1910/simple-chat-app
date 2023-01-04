const express = require('express');
const User = require('../Schema/users');
const jwt = require('jsonwebtoken');

const router = express.Router();

// expected request

// {
//     token: String
// }

router.post('/getConnection', (req, res) => {
    jwt.verify(req.body.token, process.env.JWT_SECRET, async function(err, decoded) {
        if (err) console.log("um wrong")

        const user = await User.findById(decoded)
        res.status(200).json(user.connections)
    })
})

module.exports = router