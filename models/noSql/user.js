const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
	{
		id: {
			type: mongoose.Types.ObjectId,
		},
		nombre: {
			type: String,
			unique: true,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
		},
		role: {
			type: ['user', 'admin'],
			default: 'user',
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);
module.exports = mongoose.model('user', UserScheme);
