
var Mongoose = require('mongoose');


var ImgSchema = new Mongoose.Schema({
	"image" : { type: String },
	"hashtag" : { type: String}
});

exports.Img = Mongoose.model('Img', ImgSchema);


