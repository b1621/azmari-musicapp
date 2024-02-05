const express = require("express");

const {
  getAllSongs,
  createSong,
  deleteSong,
} = require("../controller/songController");

const router = express.Router();

router.route("/").get(getAllSongs).post(createSong);

router.route("/:songId").delete(deleteSong);
module.exports = router;
