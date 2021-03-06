const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
	author: {
		type: String
	},
	body: {
		type: String
	}
});

const Comment = mongoose.model('Comment', CommentSchema);

module.export = Comment;