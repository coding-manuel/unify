const bcrypt = require('bcryptjs')

const User = require('../models/User')

const login = (req, res, next) => {
	User.findOne({ username: req.body.username }, async (err, doc) => {
		if (err) {
			return next(err)
		}
		if (!doc) res.json('User Does not Exist')
		if (doc) {
			bcrypt.compare(req.body.password, doc.password, (err, result) => {
				if (err) throw err
				if (result === true) {
					res.json('Logged In')
				} else {
					res.json('Wrong Password')
				}
			})
		}
	})
}

const register = (req, res) => {
	User.findOne({ username: req.body.username }, async (err, doc) => {
		if (err) {
			return next(err)
		}
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
