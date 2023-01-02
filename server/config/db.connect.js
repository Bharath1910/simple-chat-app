require('dotenv').config()
const mongoose = require('mongoose');

function connect() {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'chatapp'
        })
        console.log("connected to DB!");
    } catch (error) {
        console.log(error)
    }
};

module.exports.connect = connect