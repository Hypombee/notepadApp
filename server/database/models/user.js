
const  mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: {
                type: String,
                trim: true,
                minimumLength: 3,
		required: true,
		dropDups: true
	},
	password: {
		type: String,
		trime: true,
		minimumLength: 8,
		required: true,
		default: "password"
	},
	isAdmin: {
		type: Boolean,
		required: true,
		default: false
	}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
