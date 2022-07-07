const express = require("express");
const { CommentController } = require("../controllers");

const routes = express.Router();

routes.get("/comment", CommentController.browse);
routes.get("/comment/:id", CommentController.read);
routes.put("/comment/:id", CommentController.edit);
routes.post("/comment", CommentController.add);
routes.delete("/comment/:id", CommentController.delete);

module.exports = routes;
