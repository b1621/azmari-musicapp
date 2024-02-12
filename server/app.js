const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
const connectDB = require("./config/db");

connectDB();
const app = express();

const songRouter = require("./router/songRouter");
const artistRouter = require("./router/artistRouter");
const albumRouter = require("./router/albumRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS with credentials in your Express app
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(
  cors({
    origin: "",
    // origin: 'http://yourfrontenddomain.com', // Replace with your frontend domain
    credentials: true, // Enable credentials (cookies, authorization headers)
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
    // allowedHeaders: "Content-Type,Authorization", // Allowed headers
    // preflightContinue: false, // Disable preflight caching
  })
);

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
