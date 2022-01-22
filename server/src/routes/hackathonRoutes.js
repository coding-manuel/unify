const express = require('express')
const {
	putDetails,
	putDomains,
	createHackathon,
	putFAQS,
	getDetails,
} = require('../controller/hackathonController')

const router = express.Router()

router.post('/putdetails', putDetails)
router.post('/putdomains', putDomains)
router.post('/createhackathon', createHackathon)
router.post('/putFAQS', putFAQS)
router.get('/getDetails', getDetails)
module.exports = router
