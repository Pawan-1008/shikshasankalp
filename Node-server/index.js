const express = require('express');
const dontenv = require('dotenv').config()
const cors = require('cors');
const { mongoose } = require('mongoose')

const app = express();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('database not connected', err))

app.use(express.json())
app.use('/', require('./routes/authRoutes'))
const port = 9000;
app.listen(port, () => console.log(`server is running on port ${port}`))