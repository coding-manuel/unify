const passport = require('passport')
const Submit = require('../models/Submit')

const submitDetails = (req, res) => {
	Submit.create({HackID: req.body.HackID}, function(err, doc){
        if(err) return res.send(500, {error: err})
        return res.send({id: doc.id})
    })    
}

module.exports = { submitDetails }