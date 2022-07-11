const express = require("express");
const { CategoryController } = require("../controllers");

const routes = express.Router();

routes.get("/category", CategoryController.browse);
routes.get("/category/:id", CategoryController.read);
routes.post("/category", CategoryController.add);
routes.put("/category/:id", CategoryController.edit);
routes.delete("/category/:id", CategoryController.delete);
