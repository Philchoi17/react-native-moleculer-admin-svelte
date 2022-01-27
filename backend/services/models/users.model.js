const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	_id: String,
	email: String,
	password: String,
	name: String,
	role: Number,
	age: Number,
	gender: String,
	createdAt: Date,
	updatedAt: Date,
})

module.exports = userSchema
