const express = require("express");
const { UserController } = require("../controllers");

const routes = express.Router();
const { authorization, isAdmin } = require();

// user DB
routes.get("/users", authorization, isAdmin, UserController.browse);
routes.post("/users/register", UserController.register);
routes.post("/users/login", UserController.login);
routes.get("/users", UserController.browse);
routes.get("/users/logout", authorization, UserController.logout);
routes.put("/users/:id", UserController.edit);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;
