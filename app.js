var express = require('express'),
    app = express(),
    exphbs = require('express-handlebars'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');    

MongoClient.connect(dblocation, function(err, db) {

	assert.equal(null, err);
	console.log("Successfully connected to the server");
	app.POST('/home', function(res, req) {

	})

	// db.collection('info').find({"name":"mickey mouse"}).toArray(function(err, docs) {
	// 	docs.forEach(function(doc) {
	// 		if(doc.name === "mickey mouse") {
	// 		console.log("Found a " + doc.name + " in the database");
	// 	    } else {
	// 	    	console.log("Person is not in the database");
	// 	    }
	// 	});
	// 	db.close();
	// });
	// console.log("Called find()");
}); 

app.get('/home', function(req, res) {
	var nameFromForm = req.query.name;
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

var getNameValue = app.get('/home', function(req,res) {
	var getName  = req.query.name;

	return getName;
});

var dblocation = 'mongodb://localhost:27017/customer';

// MongoClient.connect(dblocation, function(err, db) {

// 	assert.equal(null, err);
// 	console.log("Successfully connected to the server");

// 	db.collection('info').find({"name":"mickey mouse"}).toArray(function(err, docs) {
// 		docs.forEach(function(doc) {
// 			if(doc.name === "mickey mouse") {
// 			console.log("Found a " + doc.name + " in the database");
// 		    } else {
// 		    	console.log("Person is not in the database");
// 		    }
// 		});
// 		db.close();
// 	});
// 	console.log("Called find()");
// });    

app.listen(27017, function() {
	console.log("app listening on port 27017");
});    