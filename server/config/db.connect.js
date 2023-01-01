require('dotenv').config({ path: '../.env' })
const mongoose = require('mongoose');

export function connect() {
    try {
        mongoose.set('strictQuery', false);
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