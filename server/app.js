/*
	importing modules
	CORS - Cross Origin Request Security
                localhost:3000 - backend api
                localhost:9092 - front-end
*/
const express = require('express');
const bodyparser = require ('body-parser');
const cors = require('cors');
const path = require('path');

/*
	Create server and database objects
	Port Number
*/
const app = express();
const mongoose = require('./database/mongoose');
const port = 9092;

/*
	Import mongodb models
*/
const User = require('./database/models/user');
//const List = require('./database/models/user');
const Note = require('./database/models/note');

/*
	EXTRACTED VERSION FROM CORS
		app.use((req, res, next) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Methods", "GET, POST, HEAD< OPTIONS, PUT, PATCH, DELETE");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			next();
		});
*/
app.use(cors());

/*
	Define JSON parser
*/
app.use(express.json());

/*
	CRUD
	User: Create, Update, ReadOne, ReadAll, Delete
	List: Create, Update, ReadOne, ReadAll, Delete
	Note: Create, Update, ReadOne, ReadAll, Delete

	HTTP Methods
	GET - Get data from database
	POST - Save data to database
	PUT, PATCH - Update data in database
	DELETE - Delete data from database
*/

/*
	User API
*/
/*     Get a User by Id        */
app.get('/:userId', (req, res) => {
        User.find({_id: req.params.userId })
                .then(user => res.send(user))
                .catch(error => console.log(error));
});
/*      Create a User     */
app.post('/newuser', (req, res) => {
        new User({ 'username': req.body.username, 'password': req.body.password })
                .save()
                .then(user => res.send(user))
                .catch(error => console.log(error));
});
/*      Update a User   */
app.patch('/:userId', (req, res) => {
        User.findByIdAndUpdate({'_id':req.params.userId}, {$set: req.body})
                .then(user => res.send(user))
                .catch(error => console.log(error));
});
/*      Delete a User   */
app.delete('/:userId', (req, res) => {
        User.findByIdAndDelete(req.params.userId)
                .then(user => res.send(user))
                .catch(error => console.log(error));
	/*
		Need Delete all user notes
	*/
});

/*
	NOTES API

/*	Get All Notes from a user	*/
app.get('/:userId/notes', (req, res) =>	{
	Note.find({_userId: req.params.userId})
		.then(notes => res.send(notes))
		.catch(error => console.log(error));
});
/*      Get a Note by Id        */
app.get('/:userId/:noteId', (req, res) => {
        Note.find({_id: req.params.noteId })
        	.then(note => res.send(note))
        	.catch(error => console.log(error));
});
/*	Post a Note	*/
app.post('/:userId/notes', (req, res) => {
	new Note({ 'title': req.body.title, '_userId': req.params.userId })
		.save()
		.then(note => res.send(note))
		.catch(error => console.log(error));
});
/*	Update a Note	*/
app.patch('/:userId/:noteId', (req, res) => {
	Note.findByIdAndUpdate({'_id':req.params.noteId}, {$set: req.body})
		.then(note => res.send(note))
		.catch(error => console.log(error));
});
/*      Delete a Note   */
app.delete('/:userId/:noteId', (req, res) => {
        Note.findByIdAndDelete(req.params.noteId)
                .then(note => res.send(note))
                .catch(error => console.log(error));
});

//testing Server landing page
app.get('/',(reg, res)=>{
	res.send('<head><title>NotePadApp</title></head><b>Development In Progress...</b><br><br><a href="https://hypombee.com">Back to Hypombee</a>');
});

app.listen(port,()=>{
	console.log('Server started at port:'+port);
});

