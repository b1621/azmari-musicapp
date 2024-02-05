const express = require("express");

const { getAllSongs } = require("../controller/songController");

const router = express.Router();

router.get("/", getAllSongs);

module.exports = router;
