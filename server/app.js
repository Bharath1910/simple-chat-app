require('./config/db.connect').connect()
const express = require('express');

const register = require('./controllers/register');
const login = require('./controllers/login');
const search = require('./controllers/search')
const getData = require('./controllers/getData')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', register);

app.use('/api', login);

app.use('/api', search);

app.use('/api', getData)

app.listen(3000)