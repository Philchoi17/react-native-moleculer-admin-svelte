const mongoose = require('mongoose')

const usersModel = mongoose.model(
	'users',
	mongoose.Schema({
		_id: String,
		email: String,
		password: String,
		name: String,
		role: Number,
		age: Number,
		gender: String,
		createdAt: Date,
		updatedAt: Date,
	}),
)

module.exports = usersModel
