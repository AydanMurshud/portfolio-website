const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: String,
    description: String
})
const project = mongoose.model('Projects',projectSchema)
module.exports = project