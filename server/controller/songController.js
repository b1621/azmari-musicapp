const asyncHandler = require("express-async-handler");

const Song = require("../model/songModel");

exports.getAllSongs = asyncHandler(async (req, res) => {
  const songs = await Song.find({});
  res.status(200).json({
    total: songs.length,
    songs,
  });
});
exports.createSong = asyncHandler(async (req, res) => {});
