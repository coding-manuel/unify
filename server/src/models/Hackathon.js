const mongoose = require('mongoose')

const HackathonSchema = new mongoose.Schema({
	id: String,
	name: {
		type: String,
	},
	date: {
		type: String,
	},
	time: {
		type: String,
	},
	domain1: {
		type: String,
	},
	domain2: {
		type: String,
	},
	domain3: {
		type: String,
	},
	domain4: {
		type: String,
	},
	guidelines: {
		type: String,
	},
	FAQ1: {
		type: String,
	},
	FAQ2: {
		type: String,
	},
})

const Hackathon = mongoose.model('Hackathon', HackathonSchema)

module.exports = Hackathon
