const express = require("express");
const { UserController } = require("../controllers");

const routes = express.Router();
const { authorization, isAdmin } = require("../middlewares/authMiddleware");

routes.get("/users", authorization, isAdmin, UserController.browse);
routes.get("/users/pseudo", UserController.checkPseudo);
routes.get("/users/email", UserController.checkEmail);
routes.post("/users/register", UserController.register);
routes.post("/users/login", UserController.login);
routes.post("/users/logout", authorization, UserController.logout);
routes.put("/users/:id", authorization, UserController.edit);
routes.delete("/users/:id", authorization, UserController.delete);

module.exports = routes;
