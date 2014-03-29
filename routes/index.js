var models = require('../models');

exports.view = function(req, res) {
	//search the database object for a model.
	models.Img.find({}, function(err, dbData){
		data = {'images':dbData}
		res.render('index', data);
	});
}

