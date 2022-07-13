CREATE TABLE `User` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `pseudo` varchar(255),
  `password` varchar(255),
  `role` varchar(255),
);EXISTS

CREATE TABLE `Post` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `content` varchar(255),
  `user_id` int,
  `category_id` int,
  `created_at` datetime,
  `nbr_post` int,
  `nbr_signals` int
);

CREATE TABLE `Comment` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `created_at` datetime,
  `user_id` int,
  `post_id` int
);

CREATE TABLE `Category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `color` varchar(255)
);

ALTER TABLE `User` ADD FOREIGN KEY (`id`) REFERENCES `Comment` (`user_id`);

ALTER TABLE Comment ADD FOREIGN KEY (user_id) REFERENCES User (id);

ALTER TABLE `Post` ADD FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`);
