const passport = require('passport')
const bcrypt = require('bcryptjs')

const User = require('../models/User')

const login = (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (err) throw err
		if (!user) res.send('No User Exists')
		else {
			req.logIn(user, (err) => {
				if (err) throw err
				res.send('Successfully Authenticated')
				console.log(req.user)
			})
		}
	})
}

const register = (req, res) => {
	console.log(req.body)
	User.findOne({ username: req.body.username }, async (err, doc) => {
		if (err) throw err
		if (doc) res.send('User Already Exists')
		if (!doc) {
			const hashedPassword = await bcrypt.hash(req.body.password, 10)

			const newUser = new User({
				name: req.body.name,
				username: req.body.username,
				email: req.body.email,
				password: hashedPassword,
			})
			await newUser.save()
			res.send('User Created')
		}
	})
}

const getUser = (req, res) => {
	res.send(req.user) // The req.user stores the entire user that has been authenticated inside of it.
}

module.exports = { login, register, getUser }
