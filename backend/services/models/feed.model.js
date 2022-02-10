// _id: 1,
// title: 'test',
// description: 'test',
// image: 'test',
// link: 'test',
// date: 'test',

const mongoose = require('mongoose')

const feedSchema = new mongoose.Schema({
	_id: String,
	title: String,
	description: String,
	image: String,
	link: String,
	date: String,
	createdAt: Date,
	updatedAt: Date,
})

const FeedModel = mongoose.model('feed', feedSchema)

module.exports = FeedModel
