const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../Schema/users')
const ChatData = require('../Schema/chatData');
const chatData = require('../Schema/chatData');


router = express.Router();



// example body

// {
//     token: token,
//     toUser: toUser
// }

router.post('/getData', (req, res) => {
    if (req.body.token) {
        jwt.verify(req.body.token, process.env.JWT_SECRET, async function(error, token) {
            const user = await User.findById(token.token)
            const username = user.username
            const toUser = req.body.toUser

            const chatData = await ChatData.findOne({ $and: [ { users: username }, { users: toUser } ] })
            
            if (chatData) {
                res.status(200).json({ dataId: chatData._id, data: chatData.chatData })
            } else {
                const newChatData = await ChatData.create({ users: [username, toUser], chatData: [] })
                res.status(200).json({ deataId: newChatData._id, data: newChatData.chatData })
            }
        })
    }
})

module.exports = router