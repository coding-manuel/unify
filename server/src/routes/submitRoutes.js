const express = require('express')
const {submitDetails} = require("../controller/submitController")

const router = express.Router()

router.post('/submitDetails', submitDetails)


module.exports = router
