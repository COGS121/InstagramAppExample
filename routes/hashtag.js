var auth = require('../auth');

exports.getHashtag = function(req, res) {
	//test to see if it works
	auth.ig.tags.info({
	name: 'sushi',
	complete: function(data) {
		console.log(data);
	}
});
	res.render('hashtag');
}