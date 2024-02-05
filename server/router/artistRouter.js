const express = require("express");

const { getAllArtists } = require("../controller/songController");

const router = express.Router();

router.route("/").get(getAllArtists);

// router.route("/:songId").delete(deleteSong);
module.exports = router;
