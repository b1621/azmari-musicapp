const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const connectDB = require("./config/db");

connectDB();
const app = express();

const songRouter = require("./router/songRouter");
const artistRouter = require("./router/artistRouter");
const albumRouter = require("./router/albumRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use morgan middleware to log HTTP requests
app.use(morgan("dev"));

app.use("/api/v1/song", songRouter);
app.use("/api/v1/artist", artistRouter);
app.use("/api/v1/album", albumRouter);

app.get("/", (req, res) => {
  res.send("Hello world. page");
  console.log("hello");
});

module.exports = app;
