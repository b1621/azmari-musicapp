const express = require("express");

const { listAlbums } = require("../controller/songController");

const router = express.Router();

router.route("/").get(listAlbums);
// router.route("/:artistName").get(getArtistSongs);

// router.route("/:songId").delete(deleteSong);
module.exports = router;
