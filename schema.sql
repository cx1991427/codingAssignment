CREATE DATABASE IF NOT EXISTS wishlist;

USE wishlist;

CREATE TABLE `products` (
	`product_id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`price` FLOAT(5, 2) NOT NULL,
	PRIMARY KEY (`product_id`)
);

CREATE TABLE `inventory` (
	`inventory_id` INT NOT NULL AUTO_INCREMENT,
	`size` ENUM('S', 'M', 'L', 'XL') NOT NULL,
	`stock` INT NOT NULL,
	`product_id` INT NOT NULL,
	PRIMARY KEY (`inventory_id`),
	FOREIGN KEY (`product_id`) REFERENCES products (product_id) ON DELETE CASCADE
);

CREATE TABLE `items` (
	`item_id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`product_id` INT NOT NULL,
	`size` ENUM('S', 'M', 'L', 'XL') NOT NULL,
	`quantity` INT NOT NULL,
	`type` ENUM('cart', 'wishlist') NOT NULL,
	PRIMARY KEY (`item_id`),
	FOREIGN KEY (`product_id`) REFERENCES products (product_id) ON DELETE CASCADE,
	FOREIGN KEY (`user_id`) REFERENCES users (user_id) ON DELETE CASCADE
);

CREATE TABLE `images` (
	`image_id` INT NOT NULL AUTO_INCREMENT,
	`product_id` INT NOT NULL,
	`uri` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`image_id`),
	FOREIGN KEY (`product_id`) REFERENCES products (product_id) ON DELETE CASCADE
);


INSERT INTO `products` (`name`, `price`) VALUES ('Red Shirt', 10.00);
INSERT INTO `products` (`name`, `price`) VALUES ('Blue Shirt', 10.00);

INSERT INTO `inventory` (`product_id`, `size`, `stock`) VALUES (1, 'S', 5);
INSERT INTO `inventory` (`product_id`, `size`, `stock`) VALUES (1, 'M', 5);
INSERT INTO `inventory` (`product_id`, `size`, `stock`) VALUES (1, 'L', 5);
INSERT INTO `inventory` (`product_id`, `size`, `stock`) VALUES (1, 'XL', 5);

INSERT INTO `inventory` (`product_id`, `size`, `stock`) VALUES (2, 'S', 5);
INSERT INTO `inventory` (`product_id`, `size`, `stock`) VALUES (2, 'M', 5);
INSERT INTO `inventory` (`product_id`, `size`, `stock`) VALUES (2, 'L', 5);
INSERT INTO `inventory` (`product_id`, `size`, `stock`) VALUES (2, 'XL', 5);

INSERT INTO `images` (`product_id`, `uri`) VALUES (1, 'red_shirt_image0');
INSERT INTO `images` (`product_id`, `uri`) VALUES (2, 'blue_shirt_image0');

INSERT INTO `items` (`user_id`, `product_id`, `size`, `quantity`, `type`) VALUES (1, 1, "L", 1, 'wishlist');
INSERT INTO `items` (`user_id`, `product_id`, `size`, `quantity`, `type`) VALUES (1, 2, "L", 1, 'wishlist');



