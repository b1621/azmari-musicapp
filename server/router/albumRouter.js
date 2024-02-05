const express = require("express");

const { listAlbums, getAlbumSongs } = require("../controller/songController");

const router = express.Router();

router.route("/").get(listAlbums);
router.route("/:albumName").get(getAlbumSongs);

// router.route("/:songId").delete(deleteSong);
module.exports = router;
