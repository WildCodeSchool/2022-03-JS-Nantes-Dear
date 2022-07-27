const express = require("express");
const { UserController } = require("../controllers");

const routes = express.Router();
const { authorization } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/isAdminMiddleware");

routes.get("/users", authorization, isAdmin, UserController.browse);
routes.get("/users/pseudo", UserController.checkPseudo);
routes.get("/users/email", UserController.checkEmail);
routes.get("users/checkToken", UserController.checkToken);
routes.post("/users/register", UserController.register);
routes.post("/users/login", UserController.login);
routes.get("/users/logout", authorization, UserController.logout);
routes.put("/users/:id", authorization, UserController.edit);
routes.delete("/users/:id", authorization, UserController.delete);

module.exports = routes;
