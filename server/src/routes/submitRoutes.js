const express = require('express')
const { submitDetails, getDetails } = require('../controller/submitController')

const router = express.Router()

router.post('/submitDetails', submitDetails)
router.post('/getDetails', getDetails)

module.exports = router
