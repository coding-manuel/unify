const { uuid } = require('uuidv4')
const passport = require('passport')
const Hackathon = require('../models/Hackathon')
const User = require('../models/User')
const Team = require('../models/Team')

const createHackathon = (req, res) => {
	const uid = uuid()
	Hackathon.create({ name: req.body.name, id: uid }, function (err, doc) {
		if (err) return res.send(500, { error: err })
		return res.send({ id: uid })
	})
}

const putDetails = (req, res) => {
	Hackathon.findOneAndUpdate(
		{ id: req.body.id },
		{ date: req.body.date, time: req.body.time },
		{ upsert: true },
		function (err, doc) {
			if (err) return res.send(500, { error: err })
			return res.send('Succesfully saved.')
		}
	)
}

const putDomains = (req, res) => {
	Hackathon.findOneAndUpdate(
		{ id: req.body.id },
		{
			domain1: req.body.domain1,
			domain2: req.body.domain2,
			domain3: req.body.domain3,
			domain4: req.body.domain4,
		},
		{ upsert: true },
		function (err, doc) {
			if (err) return res.send(500, { error: err })
			return res.send('Succesfully saved.')
		}
	)
}

const putFAQS = (req, res) => {
	Hackathon.findOneAndUpdate(
		{ id: req.body.id },
		{ guidelines: req.body.guideline, FAQ1: req.body.FAQ1, FAQ2: req.body.FAQ2 },
		{ upsert: true },
		function (err, doc) {
			if (err) return res.send(500, { error: err })
			return res.send('Succesfully saved.')
		}
	)
}

const getDetails = async (req, res) => {
	const doc = await Hackathon.findOne({ id: req.body.id })
	res.send(doc)
}

const getAll = async (req, res) => {
	const doc = await Hackathon.find({})
	res.send(doc)
}

const getUser = async (req, res) => {
	const doc = await User.find({ username: req.body.username })
	res.send(doc)
}

const createTeam = async (req, res) => {
	const uid = uuid()
	Team.create(
		{ hackathonID: req.body.hackathonID, teamID: uid, $push: { team: req.body.username } },
		function (err, doc) {
			if (err) return res.send(500, { error: err })
			return res.send({ id: uid })
		}
	)
}

const addMember = async (req, res) => {
	await User.findOneAndUpdate(
		{ username: req.body.username },
		{ $push: { hackathon: req.body.hackathonID } },
		{ upsert: true }
	)
	await Team.findOneAndUpdate(
		{ teamID: req.body.teamID },
		{ $push: { team: req.body.username } },
		{ upsert: true }
	)
	res.send('Added Hackathon')
}

module.exports = {
	putDetails,
	putDomains,
	createHackathon,
	putFAQS,
	getDetails,
	getAll,
	addMember,
	getUser,
	createTeam,
}
