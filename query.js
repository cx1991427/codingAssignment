const db = require("./db");

exports.send = function(query, args, res){
	response = []
	db.query(query, args, function(err, rows, fields) {
  		if (!err){
 
			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
			}
			else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}
 
			res.setHeader('Content-Type', 'application/json');
	    	res.status(200).send(JSON.stringify(response));
  		} else {
		    res.status(400).send(err);
	  	}
	});
}