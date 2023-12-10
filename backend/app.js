const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./src");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((error, req, res, next) => {
  req.status(500).send(error.message);
});

app.use(router);

module.exports = app;
