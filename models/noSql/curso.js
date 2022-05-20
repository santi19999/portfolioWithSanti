const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema(
	{
		nombre: {
			type: String,
		},
		temas: {
			type: String,
		},
		descripcion: {
			type: String,
		},
		precio: {
			type: Number,
		},
		gratis: {
			type: Boolean,
			default: true,
		},
		contenido: {
			type: Array,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);
module.exports = mongoose.model('Curso', CursoSchema);
