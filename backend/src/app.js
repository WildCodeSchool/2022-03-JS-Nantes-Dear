const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes");
const postRoutes = require("./routes/post.routes");
const router = require("./router");

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.get("/posttext", (_, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Method", "GET,OPTIONS,PUT,DELETE,POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send("[GET] Hello World!");
});
app.post("/posttext", (_, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Method", "GET,OPTIONS,PUT,DELETE,POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send("[POST] Hello World!");
});
app.put("/step-4-2", (_, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Method", "GET,OPTIONS,PUT,DELETE,POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send("[PUT] Hello World!");
});
app.delete("/step-4-2", (_, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Method", "GET,OPTIONS,PUT,DELETE,POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send("[DELETE] Hello World!");
});
app.options("/step-4-1", (_, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Method", "GET,OPTIONS,PUT,DELETE,POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send();
});

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use(userRoutes);
app.use(categoryRoutes);
app.use(postRoutes);
app.use(router);

module.exports = app;
