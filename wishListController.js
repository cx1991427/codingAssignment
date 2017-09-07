const query = require("./query")

exports.getWishlist = function(req, res){
	if (typeof req.params.userId !== 'undefined'){
		var id = req.params.userId,
		    type = 'wishlist',
		    q = `SELECT uri, name, item.size, item.product_id, price, quantity, stock
		    FROM items as item
		    JOIN products AS product ON product.product_id = item.product_id 
		    JOIN images AS image ON image.product_id = item.product_id 
		    JOIN inventory AS inventory ON inventory.product_id = item.product_id AND item.size = inventory.size
		    WHERE user_id = ? AND type = ?`
		query.send(q, [id, type], res);
	}
	else{
		response = []
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
}

exports.addToWishlist = function(req, res){
    var response = [];
 
	if (
		typeof req.body.userId !== 'undefined' && 
		typeof req.body.productId !== 'undefined' &&
		typeof req.body.size !== 'undefined' && 
		typeof req.body.quantity !== 'undefined'  
	) {
		var userId = req.body.userId, 
	        productId = req.body.productId, 
	        quantity = req.body.quantity,
	        size = req.body.size,
	        type = 'wishlist';
 
		query.send('INSERT INTO items (user_id, product_id, quantity, size, type) VALUES (?, ?, ?, ?, ?)', 
			[userId, productId, quantity, size, type], res);
	}
	else {
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
}


exports.updateWishlistItemQuantity = function(req, res){
	var response = [];
 
	if (
		typeof req.body.itemId !== 'undefined' && 
		typeof req.body.quantity !== 'undefined'  
	) {
		var itemId = req.body.itemId, 
	        quantity = req.body.quantity;
 
		query.send('UPDATE items SET quantity = ? WHERE item_id = ?', [quantity, itemId], res);
			
	} 
	else {
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
}

exports.addToCart = function(req, res){
	var response = [];
 
	if (
		typeof req.body.itemId !== 'undefined' 
	) {
		var itemId = req.body.itemId, 
	        type = 'cart';
 
		query.send('UPDATE items SET type = ? WHERE item_id = ?', [type, itemId], res); 
 
	} else {
		response.push({'result' : 'error', 'msg' : 'Please fill required details'});
		res.setHeader('Content-Type', 'application/json');
    	res.status(200).send(JSON.stringify(response));
	}
}