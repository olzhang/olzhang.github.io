/**
 * mongoose schema for blog post 
 * contains _id, image, body, date, comments, category,
 * tag, and blog post number
 */

var mongoose = require("mongoose")

var commentObject = {
		_id: ObjectId, 
		author: String,
        body: String,
        date: Date,
        isReply: {type: Boolean, default: false},
        replies: [{type: ObjectId, default: null}] //Id of comments 
}
    
module.exports = mongoose.model('Comment', mongoose.Schema(blogPostObject));
