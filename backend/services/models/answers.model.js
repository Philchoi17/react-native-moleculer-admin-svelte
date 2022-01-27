const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
	_id: String,
	userId: String,
	questionId: String,
	answer: String,
	questionType: String,
	createdAt: Date,
	updatedAt: Date,
})

module.exports = questionSchema
