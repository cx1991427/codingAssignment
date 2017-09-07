mysql    = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'wishlist'
});

try {
	connection.connect();
	console.log("You are now connected");
	
} catch(e) {
	console.log('Database Connetion failed:' + e);
}

module.exports = connection;