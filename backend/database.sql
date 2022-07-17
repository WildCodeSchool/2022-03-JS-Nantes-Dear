CREATE DATABASE  IF NOT EXISTS dear;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id int PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) UNIQUE,
  pseudo varchar(255) UNIQUE,
  password varchar(255),
  role varchar(255)
);

DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `content` varchar(255),
  `userId` int,
  `categoryId` int,
  `createdAt` datetime,
  `likes` int,
  `signals` int
);

DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `createdAt` datetime,
  `userId` int,
  `postId` int
);

DROP TABLE IF EXISTS category;
CREATE TABLE category (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255),
  color varchar(255)
);

ALTER TABLE user ADD FOREIGN KEY (id) REFERENCES comment (user_id);

ALTER TABLE comment ADD FOREIGN KEY (user_id) REFERENCES User (id);

ALTER TABLE post ADD FOREIGN KEY (category_id) REFERENCES category (id);