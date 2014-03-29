var auth = require('../auth');
var models = require('../models');

exports.getHashtag = function(req, res) {
	auth.ig.tags.recent({
	name: req.body.hashtag,
	complete: function(data) {
		//create an image array
		imageArr = [];
		//Map will iterate through the returned data obj
		data.map(function(item) {
			//create temporary json object
			tempJSON = {};
			tempJSON.url = item.images.standard_resolution.url;
			//insert json object into image array
			imageArr.push(tempJSON);
		});
		//turn image array and the hashtag name into data to return
		data = {imageArray: imageArr, hashtagValue:req.body.hashtag};
		//return data to the webpage
		res.render('hashtag', data);
	}
	});
}

exports.saveFavorites = function(req, res) {
	//create a new model for the database
	var newImage = new models.Img({
		"hashtag": req.body.hashtag,
		"image": req.body.url
	});

	newImage.save(callbackFunction);

	function callbackFunction(err) {
		err ? (console.log(err), res.redirect('/')) : res.redirect('/');
	}
}