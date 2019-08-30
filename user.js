//var db = require('./db');
var express = require('express');
var router = express.Router();
var request = require('request');
const Unsplash = require('unsplash-js').default;
const unsplash = new Unsplash({
	applicationId: 'e67071ae7274c36d47253c3ec2e63003cd1fc92f83edf0a1cda5abecdcc1524a',
	secret: 'ecd179565d2deeda9e101a105310520b0c50ddce5a3358e00dcc419a80e7411b'
});
var api_endpoint =
	'https://api.unsplash.com/search/photos?client_id=' +
	'15e5ef8296137e80015af9bd5e2d48a8f28b498e79ab7a9c286472c94b42fbd8' +
	'&query=office&collections=""';
router.get('/getPhotos', function(req, res) {
 api_endpoint = api_endpoint + '&query='+ req.headers.imagetype + '&collections=""';
	request.get(api_endpoint, (e, r) => {
		res.send({
			data: JSON.parse(r.body)
		});
	});
});

module.exports = router;
