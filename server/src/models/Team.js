const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
	hackathonID: String,
	team: Array,
	teamID: String,
})

const Team = mongoose.model('Team', TeamSchema)

module.exports = Team
