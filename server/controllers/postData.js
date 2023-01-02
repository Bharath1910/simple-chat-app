const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../Schema/users')
const ChatData = require('../Schema/chatData');

router = express.Router();

// example request

// {
//     token: String,
//     chatData: Object
// }


router.post('/postData', (req, res) => {
    const token = req.body.token
    if (!token) res.status(401).json({ error: "Couldn't update database" })

    jwt.verify(token, process.env.JWT_SECRET, async function(error, cookie) {
        await ChatData.updateOne({ _id: cookie.token }, { $push: { chatData: req.body.data } }, function(error, result) {
            console.log(result)
        })
    } )
})

module.exports = router