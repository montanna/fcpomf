/* ------------- dependencies ------------- */

var fs             = require('fs');
var express        = require('express');
var ejs            = require('ejs'); 
var path           = require('path');
var bodyParser     = require('body-parser');

// FIREBASE //
var firebase       = require('firebase-admin');                          // 'firebase' node module is outdated.

/* ---------------- routes ---------------- */

var index = require('./routes/index');

/* ---------------- config ---------------- */

var app = express();

// VIEW ENGINE //

app.set('views', path.join( __dirname, 'views' ));                       // use ./views as views directory
app.set('view engine', 'ejs');                                           // use ejs as our templating engine

// RESOURCES //
app.use('/static', express.static( __dirname + '/public') );             // serve requests to /static from /public

// REQUEST PARSING //
app.use(bodyParser.json());                                              // parse post requests as JSON data
app.use(bodyParser.urlencoded({ extended: false }));                     // do not allow nested objects in a post request

// ROUTING //
app.use('/', index);

/* ---------------- create ---------------- */

var port = process.env.PORT || 4000;
app.listen( port , function() {
	console.log("non-secure server on port " + port );
});
