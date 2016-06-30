var express = require('express'),
    app = express(),
    exphbs = require('express-handlebars'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var dblocation = 'mongodb://localhost:27017/customer';

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');    

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/inspiration', function(req, res) {
	res.render('inspiration');
});

app.get('/inspiration', function(req, res) {
	res.render('Inspiration quotes inspire');
});

MongoClient.connect(dblocation, function(err, db) {

	assert.equal(null, err);
	console.log("Successfully connected to the server");

	db.collection('info').find({}).toArray(function(err, docs) {
		docs.forEach(function(doc) {
			console.log(doc.name);
		});
		db.close();
	});
	console.log("Called find()");
});    

app.listen(27017, function() {
	console.log("app listening on port 27017");
});    