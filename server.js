// Basic Setup
var http     = require('http'),
	express  = require('express'),
	parser   = require('body-parser');
// Setup Database Connection
const db = require("./db");
 
// Setup Express
var app = express();
port = process.env.PORT || 3000;
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Setup Routes
var routes = require('./routes');
routes(app);


app.listen(port, function() {
	console.log("RESTful wishlist API server now listening on port: " + port);
});