const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
	_id: String,
	// content: Object,
	question: String,
	answer: String,
	questionType: String,
	createdAt: Date,
	updatedAt: Date,
})

module.exports = questionSchema
