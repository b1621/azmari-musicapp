const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const connectDB = require("./config/db");

connectDB();
const app = express();

const songRouter = require("./router/songRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use morgan middleware to log HTTP requests
app.use(morgan("dev"));

app.use("/api/v1/song", songRouter);

app.get("/", (req, res) => {
  res.send("Hello world. page");
  console.log("hello");
});

module.exports = app;
