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
		image: [imageSchema], //subdoc of image
        body: String,
        date: Date,
        category: String,
        tags: [String],
        comments: [ObjectId] //Id of comments 
}

var imageSchemaObject = {
    name: String,
    caption: String,
    blog: ObjectId,
    relBase: String
}


    
module.exports = mongoose.model('BlogModel', mongoose.Schema(blogPostObject));