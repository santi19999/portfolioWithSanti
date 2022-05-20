const mongoose = require('mongoose');

const PostScheme = new mongoose.Schema(
	{
		id: {
			type: mongoose.Types.ObjectId,
		},
		autor: {
			type: String,
		},
		titulo: {
			type: String,
		},
		contenido: {
			type: String,
		},
		likes: {
			type: Number,
			default: 0,
		},
		numPost: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);
module.exports = mongoose.model('post', PostScheme);
