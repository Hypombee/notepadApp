
const  mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: {
                type: String,
                trim: true,
                minLength: 3,
		required: true,
		dropDups: true
	},
	password: {
		type: String,
		trime: true,
		minLength: 8,
		required: true,
		default: "password"
	},
	isAdmin: {
		type: Boolean,
		required: true,
		default: false
	},
	isActive: {
		type: Boolean,
		required: true,
		default: true
	}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
