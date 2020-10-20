const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/notepadApp', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
	.then(() => console.log("Database connected on port 27017"))
	.catch((error) => console.log(error));

module.exports = mongoose;
