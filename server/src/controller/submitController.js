const Submit = require('../models/Submit')

const submitDetails = (req, res) => {
	Submit.create(
		{ hackid: req.body.hackID, teamid: req.body.teamID, submitProj: req.body.SubmitProj },
		function (err, doc) {
			if (err) return res.send(500, { error: err })
			return res.send(doc)
		}
	)
}

const getDetails = async (req, res) => {
	const doc = await Submit.find({})
	res.send(doc)
}

module.exports = { submitDetails, getDetails }
