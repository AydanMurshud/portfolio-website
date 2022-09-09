require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT
const DB = process.env.DB_URI

const app = express();

mongoose.connect(DB, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => {
    console.log('conected to db');
})
app.use(express.json())

const projectRouter = require('./routes/projects');
app.use('/projects',projectRouter)

app.listen(PORT, () => {
    console.log(`Server started\nListening on port: ${PORT}`);
})
