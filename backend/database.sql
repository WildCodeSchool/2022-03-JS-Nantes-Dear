-- Active: 1650891592667@@127.0.0.1@3306@dear
CREATE DATABASE IF NOT EXISTS dear;

USE dear;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id int PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) UNIQUE,
  pseudo varchar(255) UNIQUE,
  password varchar(255) UNIQUE,
  role varchar(255),
  age varchar(150)
  );

DROP TABLE IF EXISTS post;
CREATE TABLE post (
  id int PRIMARY KEY AUTO_INCREMENT,
  content varchar(255),
  userId int,
  categoryId int,
  createdAt datetime,
  likers int,
  signals int
);

DROP TABLE IF EXISTS category;
CREATE TABLE category (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255),
  color varchar(255)
);

ALTER TABLE post ADD FOREIGN KEY (categoryId) REFERENCES category (id);

ALTER TABLE user ADD FOREIGN KEY (id) REFERENCES admin (userId);

ALTER TABLE post ADD FOREIGN KEY (userId) REFERENCES user (id);

INSERT INTO user (email, pseudo, password, role, age) VALUES 
("lila@lpp-agency.com", "Lila", "$2b$10$Huf9uETmgMB0ORpChxjTY.ettsNSOnLVJoEXJhHSmdtklO.IVj21i", "ROLE_ADMIN", "18-25"),
("aline@lpp-agency.com", "Aline", "$2b$10$uaNcWP4MdKw/DjtIUj4NWuMuJvypzDkere6CRqmlQTlHcZ7caldGq","ROLE_ADMIN", "26-35"),
("severinevilleneuve@gmail.com", "severine", "$2b$10$7kHR0F.H8TbWWwtGDmWlGutxBSZQNgUsX8dodGY4kIzcepyIK00", "ROLE_ADMIN", "45+"),
("aline.saint-lanne@orange.fr", "astl", "$2b$10$bqXzfwdxfAF99ub5BAqNGeKHkeZEZEXTkm2.B1pBev9TvccUyIOsC", "ROLE_ADMIN", "26-35"),
("Petitfenouil10@gmail.com", "Petitfenouil10", "$2b$10$WUbrfR6d2QgyJmJswACuMethqHszW1b3gWXuC4/oKD3FjxRCRgRt6", "ROLE_USER", "26-34"),
("Supertomate27@gmail.com", "Supertomate27",  "$2b$10$yteXWz72uXVXyrf5wL4xBeWBSpXvhXdADcaMntt1koxECGtwzXaHC", "ROLE_USER", "36-45"),
("Ananasrose5@gmail.com", "Ananasrose5", "$2b$10$8MBdZRO9si6eHC7lbdGx9eqGftGUvGVwPwbm5xeJi7nOM4jDfikDe", "ROLE_USER", "18-25");

INSERT INTO category (name) VALUES 
("Amour"),
("Bien-être sexuel"),
("Non-binaire"),
("Pénis"),
("Polyamour"),
("Relation sexuelle"),
("Témoignage"),
("Vagin");

INSERT INTO post (content, userId, categoryId, createdAt, likers, signals) VALUES
("Je ne sais pas comment parler de sexualité avec mes ami.e.s... Je ne sais pas pourquoi ça me gêne autant", 5, 6, "2022-07-18",0,0),
("Hello, hello, besoin d'un avis. En ce moment dans mon couple c'est assez tendu, on a un blocage au niveau sexuel, la personne ne veut jamais le faire...", 6, 6, "2022-07-17",0,0),
("Je ne sais pas si je suis solo dans cette reflexion mais les poils de ma copine ne me dérange pas du tout... Et j'ai pleins d'ami.e, ça les dérangent beaucoup. Et vous?", 7, 7, "2022-07-16",0,0);
