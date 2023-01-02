require('./config/db.connect').connect()
const express = require('express');
const register = require('./controllers/register');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api', register)

app.listen(3000)