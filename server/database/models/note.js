const  mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
        title: {
                type: String,
                trim: true,
                minimumLength: 3,
		required: true
        },
	_userId: {
		type: mongoose.Types.ObjectId,
		required: true
	},
	contents: {
		type: String
	}
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
