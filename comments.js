// Create web server
// Usage: node comments.js

// Load Node modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set default port to localhost:3000
app.set('port', process.env.PORT || 3000);

// Set up body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set up public directory
app.use(express.static(__dirname + '/public'));

// Set up view directory
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Set up routes
app.get('/', function(req, res){
    res.render('index');
});

app.get('/comments', function(req, res){
    fs.readFile('comments.json', function(err, data){
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

app.post('/comments', function(req, res){
    fs.readFile('comments.json', function(err, data){
        var comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err){
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(comments));
        });
    });
});

// Start server
app.listen(app.get('port'), function(){
    console.log('Server started on localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
            
