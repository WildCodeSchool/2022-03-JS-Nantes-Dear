const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // permet de décoder le token
const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes");
const postRoutes = require("./routes/post.routes");
const router = require("./router");
// const { authorization } = require("./middlewares/authMiddleware");

const app = express();

app.use(cookieParser());

// jwt
// app.get("*", authorization); // ce middleware intervient tout le tps pour les GET

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use(userRoutes);
app.use(categoryRoutes);
app.use(postRoutes);
app.use(router);

module.exports = app;
