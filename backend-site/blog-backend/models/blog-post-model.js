/**
 * mongoose schema for blog post 
 * contains _id, image, body, date, comments, category,
 * tag, and blog post number
 */
 
var mongoose = require("mongoose")


// The image will be uploaded via formidable and then put into the mongo server via
// mongoose-file

var blogPostObject = {
		_id: ObjectId, 
		title: String
		image: [imageSchema], //subdoc of image
        body: String,
        date: Date,
        author: String,
        category: String,
        tags: [String],
        comments: [{type: ObjectId, default: null}] //Id of comments 
}

var imageSchemaObject = {
    name: String,
    caption: String,
    blog: ObjectId,
    relBase: String
}

var imageSchema = mongoose.Schema(imageSchemaObject);

imageSchema.virtual('path').get(function() {
	return relBase+ObjectId.toString();
})


    
module.exports = mongoose.model('BlogPost', mongoose.Schema(blogPostObject));