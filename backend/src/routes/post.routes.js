const express = require("express");
const { PostController } = require("../controllers");
const { authorization } = require("../middlewares/authMiddleware");

const routes = express.Router();

routes.get("/post", PostController.browse);
routes.get("/post/:id", PostController.read);
routes.put("/post/:id", PostController.edit);
routes.post("/post/posttext", authorization, PostController.add);
routes.delete("/post/:id", PostController.delete);

module.exports = routes;
