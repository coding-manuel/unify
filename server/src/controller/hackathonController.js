const passport = require('passport')
const Hackathon = require('../models/Hackathon')

const createHackathon = (req, res) => {
	Hackathon.create({name: req.body.name}, function(err, doc){
        if(err) return res.send(500, {error: err})
        return res.send({id: doc._id})
    })    
}

const putDetails = (req, res) => {
	Hackathon.findOneAndUpdate({_id: req.body.id}, {date: req.body.date, time: req.body.time}, {upsert: true},function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    })
}

const putDomains = (req, res) => {
	Hackathon.findOneAndUpdate({_id: req.body.id}, {domain1: req.body.domain1, domain2: req.body.domain2, domain3:req.body.domain3,domain4:req.body.domain4}, {upsert: true},function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    })
}

const putFAQS = (req, res) => {
	Hackathon.findOneAndUpdate({_id: req.body.id}, {guidelines: req.body.guideline, FAQ1: req.body.FAQ1, FAQ2:req.body.FAQ2}, {upsert: true},function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    })
}

// const getDetails = (req,res)=>{
//     Hackathon.findById({req.body.id})
// }

module.exports = { putDetails,putDomains, createHackathon,putFAQS }
