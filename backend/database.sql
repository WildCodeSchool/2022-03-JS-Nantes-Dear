CREATE DATABASE  IF NOT EXISTS dear;
DROP TABLE IF EXISTS admin;
CREATE TABLE `admin` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `message` varchar(255) UNIQUE,
  `userId` int
);
DROP TABLE IF EXISTS user;
CREATE TABLE `user`(
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) UNIQUE,
  `pseudo` varchar(255) UNIQUE,
  `password` varchar(255),
  `role` varchar(255),
  `adminId` int
);

DROP TABLE IF EXISTS post;
CREATE TABLE `post` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `content` varchar(255),
  `userId` int,
  `categoryId` int,
  `createdAt` datetime,
  `likes` int,
  `signals` int
);

DROP TABLE IF EXISTS comment;
CREATE TABLE comment (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `createdAt` datetime,
  `userId` int,
  `postId` int
);

DROP TABLE IF EXISTS category;
CREATE TABLE category (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `color` varchar(255)
);

ALTER TABLE comment ADD FOREIGN KEY (userId) REFERENCES user (id);

ALTER TABLE post ADD FOREIGN KEY (categoryId) REFERENCES category (id);

ALTER TABLE admin ADD FOREIGN KEY (userId) REFERENCES user (id);

INSERT INTO user (email, pseudo, password, role) VALUES 
("lila@lpp-agency.com", "Lila", "$2b$10$Huf9uETmgMB0ORpChxjTY.ettsNSOnLVJoEXJhHSmdtklO.IVj21i", "ROLE_ADMIN"),
("aline@lpp-agency.com", "Aline", "$2b$10$uaNcWP4MdKw/DjtIUj4NWuMuJvypzDkere6CRqmlQTlHcZ7caldGq", "ROLE_ADMIN"),
("Petitfenouil10@gmail.com", "Petitfenouil10", "$2b$10$WUbrfR6d2QgyJmJswACuMethqHszW1b3gWXuC4/oKD3FjxRCRgRt6", "ROLE_USER"),
("Supertomate27@gmail.com", "Supertomate27", "$2b$10$yteXWz72uXVXyrf5wL4xBeWBSpXvhXdADcaMntt1koxECGtwzXaHC", "ROLE_USER"),
("Ananasrose5@gmail.com", "Ananasrose5", "$2b$10$8MBdZRO9si6eHC7lbdGx9eqGftGUvGVwPwbm5xeJi7nOM4jDfikDe", "ROLE_USER");

INSERT INTO category (name) VALUES 
("Amour"),
("Bien-être sexuel"),
("Non-binaire"),
("Pénis"),
("Polyamour"),
("Relation sexuelle"),
("Témoignage"),
("Vagin");

INSERT INTO post (content, userId, categoryId, createdAt) VALUES
("Je ne sais pas comment parler de sexualité avec mes ami.e.s... Je ne sais pas pourquoi ça me gêne autant", 3, 6, "2022-07-18"),
("Hello, hello, besoin d'un avis. En ce moment dans mon couple c'est assez tendu, on a un blocage au niveau sexuel, la personne ne veut jamais le faire...", 4, 6, "2022-07-17"),
("Je ne sais pas si je suis solo dans cette reflexion mais les poils de ma copine ne me dérange pas du tout... Et j'ai pleins d'ami.e, ça les dérangent beaucoup. Et vous?", 5, 8, "2022-07-16");