const express = require("express");
const { PostController } = require("../controllers");
const { authorization, isAdmin } = require("../middlewares/authMiddleware");

const routes = express.Router();

routes.get("/post", PostController.browse);
routes.get("/post/:id", authorization, isAdmin, PostController.read);
routes.put("/post/:id", PostController.edit);
routes.post("/post/posttext", authorization, PostController.add);
routes.delete("/post/:id", PostController.delete);

module.exports = routes;
