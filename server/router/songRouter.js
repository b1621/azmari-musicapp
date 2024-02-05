const express = require("express");
const multer = require("multer");

const {
  getAllSongs,
  createSong,
  deleteSong,
} = require("../controller/songController");

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads"); // Set the destination folder for storing uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".mp3"); // Use a unique filename for each uploaded file
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["audio/mpeg", "image/webp"];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type. Only MP3 and webp files are allowed."),
      false
    );
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

router
  .route("/")
  .get(getAllSongs)
  .post(
    upload.fields([
      { name: "albumPhoto", maxCount: 1 },
      { name: "artistPhoto", maxCount: 1 },
      { name: "music", maxCount: 1 },
    ]),
    createSong
  );

router.route("/:songId").delete(deleteSong);
module.exports = router;
