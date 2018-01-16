const express = require('express');
var router = express.Router();

var bcrypt = require('../../controllers/bcrypt.js');

router.get('/create', (req, res) => {
	var newNumber = Math.floor(Math.random()*90000000) + 10000000; //generates random 8-digit number
	bcrypt.generate( newNumber, (err,json) => {
		if(err){
			res.status( 500 ).send(err);
		}
		else{
			console.log(json);
			res.setHeader('Content-Type', 'application/json');
			res.send(json);
		}
	});
});
module.exports = router;