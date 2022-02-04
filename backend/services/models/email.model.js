const mongoose = require('mongoose')

const emailSchema = new mongoose.Schema({
	_id: String,
	text: String,
	to: String,
	code: String,
	createdAt: Date,
	updatedAt: Date,
})

module.exports = emailSchema
