const express = require("express");

const {
  getAllArtists,
  getArtistSongs,
  // getStatstics,
} = require("../controller/songController");

const router = express.Router();

router.route("/").get(getAllArtists);
// router.route("/stats").get(getStatstics);
router.route("/:artistName").get(getArtistSongs);

// router.route("/:songId").delete(deleteSong);
module.exports = router;
