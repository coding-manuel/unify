const mongoose = require('mongoose')

const SubmitSchema = new mongoose.Schema({
	hackid: {
		type: String,
	},
	teamid: {
		type: String,
	},
	submitProj: {
		type: String

    }
})

const Submit = mongoose.model('Submit', SubmitSchema)

module.exports = Submit
