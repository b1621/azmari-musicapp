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

exports.getAllArtists = asyncHandler(async (req, res) => {
  try {
    const artistsWithSongCount = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          songCount: { $sum: 1 },
          albums: { $addToSet: "$album" },
          artistPic: { $first: "$artistPic" },
        },
      },
      {
        $project: {
          _id: 0,
          artist: "$_id",
          songCount: 1,
          albumCount: { $size: "$albums" },
          artistPic: 1,
        },
      },
    ]);

    res.status(200).json({
      total: artistsWithSongCount.length,
      artists: artistsWithSongCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

exports.getArtistSongs = asyncHandler(async (req, res) => {
  try {
    // const artist = req.params.artistName;

    // const songs = await Song.find({
    //   artist: { $regex: new RegExp(artist, "i") },
    // });

    // res.status(200).json({ total: songs.length, songs });

    const artist = req.params.artistName;

    // Retrieve songs by the artist
    const songs = await Song.find({
      artist: { $regex: new RegExp(artist, "i") },
    });

    // Aggregate additional data about the artist
    const artistData = await Song.aggregate([
      {
        $match: { artist: { $regex: new RegExp(artist, "i") } },
      },
      {
        $group: {
          _id: "$artist",
          uniqueAlbums: { $addToSet: "$album" },
          artistPic: { $first: "$artistPic" },
        },
      },
      {
        $project: {
          artistName: "$_id",
          totalAlbums: { $size: "$uniqueAlbums" },
          artistPic: 1,
          _id: 0,
        },
      },
    ]);

    // Extract the aggregated data
    const [{ _id: artistName, totalAlbums, artistPic }] = artistData;

    // Send the response with songs and additional artist data
    res
      .status(200)
      .json({ artistName, totalAlbums, artistPic, total: songs.length, songs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

exports.listAlbums = asyncHandler(async (req, res) => {
  try {
    const albums = await Song.aggregate([
      {
        $group: {
          _id: "$album",
          artist: { $first: "$artist" }, // Get the first artist (assuming it's the same for all songs in the album)
          songCount: { $sum: 1 },
          albumPic: { $first: "$albumPic" },
          createdAt: { $first: "$createdAt" }, // Get the creation time of the first song in the album
        },
      },
      {
        $project: {
          _id: 0,
          album: "$_id",
          artist: 1,
          songCount: 1,
          albumPic: 1,
          createdAt: 1,
        },
      },
    ]);

    res.status(200).json({ total: albums.length, albums });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

exports.getAlbumSongs = asyncHandler(async (req, res) => {
  try {
    const album = req.params.albumName;

    const songs = await Song.find({
      album: { $regex: new RegExp(album, "i") },
    });

    res.status(200).json({ total: songs.length, songs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});
