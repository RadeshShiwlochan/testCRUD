var express = require('express'),
    app = express(),
    exphbs = require('express-handlebars');

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

// app.get('/inspiration', function(req, res) {
// 	res.render('Inspiration quotes inspire');
// });

app.listen(3000, function() {
	console.log("app listening on port 3000");
});    