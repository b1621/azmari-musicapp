const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      uppercase: true,
    },
    Album: {
      type: String,
      uppercase: true,
    },
    Genre: {
      type: String,
      uppercase: true,
    },
    ArtistPic: {
      type: String,
    },
    AlbumPic: {
      type: String,
    },
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", SongSchema);
module.exports = Song;
