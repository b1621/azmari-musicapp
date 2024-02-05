const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const Song = require("../model/songModel");

const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
});

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

    console.log(req.files);
    console.log(req.file);
    console.log(req.body);

    if (!title || !artist || !album || !genre) {
      res.status(400);
      throw new Error("all field should filled!!!");
    }

    // Process the uploaded files as needed
    const musicFile = req.files["music"] ? req.files["music"][0] : null;
    const albumPhoto = req.files["albumPhoto"]
      ? req.files["albumPhoto"][0]
      : null;
    const artistPhoto = req.files["artistPhoto"]
      ? req.files["artistPhoto"][0]
      : null;

    console.log("music file ", musicFile);
    console.log("album phot file ", albumPhoto);
    console.log("artist photo file ", artistPhoto);
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

    if (!mongoose.Types.ObjectId.isValid(songId)) {
      res.status(400);
      throw new Error("Invalid song ID");
    }

    await Song.deleteOne({ _id: songId });

    res.status(201).json({
      message: "song deleted !!",
    });
  } catch (error) {
    res.status(500);
    console.log(error);
    throw new Error(error);
  }
});

exports.getAllArtists = async (req, res) => {
  try {
    // const artists = await Song.distinct("artist");
    const artistsWithSongCount = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          songCount: { $sum: 1 },
          albums: { $addToSet: "$album" },
        },
      },
      {
        $project: {
          _id: 0,
          artist: "$_id",
          songCount: 1,
          albumCount: { $size: "$albums" },
        },
      },
    ]);
    // console.log("artistsWithSongCount  = ", artistsWithSongCount);
    res.status(200).json({ artists: artistsWithSongCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
