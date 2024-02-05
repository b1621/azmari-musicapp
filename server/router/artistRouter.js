const express = require("express");

const {
  getAllArtists,
  getArtistSongs,
} = require("../controller/songController");

const router = express.Router();

router.route("/").get(getAllArtists);
router.route("/:artistName").get(getArtistSongs);

// router.route("/:songId").delete(deleteSong);
module.exports = router;
