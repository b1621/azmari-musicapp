const asyncHandler = require("express-async-handler");

const Song = require("../model/songModel");

exports.getAllSongs = asyncHandler(async (req, res) => {
  try {
    const songs = await Song.find({});
    res.status(200).json({
      total: songs.length,
      songs,
    });
  } catch (error) {
    res.status(500);
    console.log(error);
    throw new Error(error);
  }
});
exports.createSong = asyncHandler(async (req, res) => {
  try {
    const { title, artist, album, genre } = req.body;
    if (!title || !artist || !album || !genre) {
      res.status(400);
      throw new Error("all field should filled!!!");
    }

    const song = await Song.create({
      title,
      album,
      artist,
      genre,
    });

    if (song) {
      res.status(201).json({
        message: "song is created",
        song,
      });
    } else {
      res.status(400);
      throw new Error("invalid song");
    }
  } catch (error) {
    res.status(500);
    console.log(error);
    throw new Error(error);
  }
});

exports.deleteSong = asyncHandler(async (req, res) => {
  try {
    const songId = req.params.songId;

    const songs = await Song.find({});
    res.status(200).json({
      total: songs.length,
      songs,
    });
  } catch (error) {
    res.status(500);
    console.log(error);
    throw new Error(error);
  }
});
