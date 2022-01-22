const express = require('express')
const { login, register, getUser } = require('../controller/authController')

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.get('/user', getUser)

module.exports = router
