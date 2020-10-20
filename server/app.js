//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require ('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//port no
const port = 9092;

//testing Server
app.get('/',(reg, res)=>{
	res.send('<head><title>NotePadApp</title></head><b>Development In Progress..</b><br><br><a href="https://hypombee.com">Back to Hypombee</a>');
});

app.listen(port,()=>{
	console.log('Server started at port:'+port);
});

