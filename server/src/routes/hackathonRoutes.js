const express = require('express')
const {
	putDetails,
	putDomains,
	createHackathon,
	putFAQS,
	getDetails,
	getAll,
	getUser,
	createTeam,
	addMember,
} = require('../controller/hackathonController')

const router = express.Router()

router.post('/putdetails', putDetails)
router.post('/putdomains', putDomains)
router.post('/createhackathon', createHackathon)
router.post('/putFAQS', putFAQS)
router.post('/getdetails', getDetails)
router.post('/getall', getAll)
router.post('/getuser', getUser)

router.post('/createteam', createTeam)
router.post('/addmember', addMember)
module.exports = router
