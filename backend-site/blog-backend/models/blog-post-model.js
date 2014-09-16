/**
 * mongoose schema for blog post 
 * contains _id, image, body, date, comments, category,
 * tag, and blog post number
 */

var mongoose = require("mongoose")

var blogPostObject = {

		_id: String,
		media: String,
		isDead: {type: Boolean, default: false},
		isEvil: String
	}