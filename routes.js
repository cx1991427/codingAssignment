module.exports = function(app) {
  var wishlist = require('./wishlistController');

  app.route('/wishlist/:userId')
    .get(wishlist.getWishlist);

  app.route('/wishlistItemQuantity')
    .put(wishlist.updateWishlistItemQuantity);

  app.route('/addToCart')
    .put(wishlist.addToCart);
};