const mongoose = require('mongoose');

const NoticiaSchema = new mongoose.Schema(
	{
		id: {
			type: mongoose.Types.ObjectId,
		},
		categoria: {
			type: String,
		},
		contenido: {
			type: String,
		},
		autor: {
			type: String,
		},
	},

	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model('noticia', NoticiaSchema);
