const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const path = require("path");
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

// exports.getStatstics = asyncHandler(async (req, res) => {
//   try {
//     const songs = await Song.find({});
//     console.log("songs == ", songs);
//     const stats = await Song.aggregate([
//       {
//         $group: {
//           _id: null,
//           totalSongs: { $sum: 1 }, // Count total number of songs
//           uniqueAlbums: { $addToSet: "$album" }, // Get unique albums
//           uniqueArtists: { $addToSet: "$artist" }, // Get unique artists
//           uniqueGenres: { $addToSet: "$genre" }, // Get unique genres
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           totalSongs: 1, // Corrected field name
//           totalUniqueAlbums: { $size: "$uniqueAlbums" }, // Count unique albums
//           totalUniqueArtists: { $size: "$uniqueArtists" }, // Count unique artists
//           totalUniqueGenres: { $size: "$uniqueGenres" }, // Count unique genres
//         },
//       },
//     ]);
//     console.log("stats == ", stats);
//     res.status(200).json({
//       stats,
//     });
//   } catch (error) {
//     res.status(500);
//     console.log(error);
//     throw new Error(error);
//   }
// });

exports.createSong = asyncHandler(async (req, res) => {
  try {
    const { title, artist, album, genre, musicDuration } = req.body;

    if (!title || !artist || !album || !genre) {
      res.status(400);
      throw new Error("all fields should be filled!!!");
    }

    // Upload images to Cloudinary
    // console.log("---------------------");
    // console.log(req.files);
    const albumPic = req.files["albumPic"] ? req.files["albumPic"][0] : null;
    const artistPic = req.files["artistPic"] ? req.files["artistPic"][0] : null;

    let albumPicUrl = null;
    let artistPicUrl = null;

    // if (albumPic) {
    //   const albumPicResult = await cloudinary.uploader.upload(albumPic.path);
    //   albumPicUrl = albumPicResult.secure_url;
    // }

    // if (artistPic) {
    //   const artistPicResult = await cloudinary.uploader.upload(artistPic.path);
    //   artistPicUrl = artistPicResult.secure_url;
    // }

    if (albumPic) {
      console.log("album pic ****", albumPic);
      try {
        const albumPicResult = await cloudinary.uploader.upload(albumPic.path);
        albumPicUrl = albumPicResult.secure_url;
        // console.log("----- album pic result ", albumPicResult);
      } catch (error) {
        console.error("Error uploading album picture:", error);
        // Handle the error, you may choose to send a response or continue without the image
      }
    } else {
      // const localAlbumPic = path.join(
      //   __dirname,
      //   "/images/realistic-music-record-label-dis.jpg"
      // );
      try {
        // const albumPicResult = await cloudinary.uploader.upload(localAlbumPic);
        // albumPicUrl = albumPicResult.secure_url;
        albumPicUrl =
          "https://res.cloudinary.com/de17diqhx/image/upload/v1707851450/tmsjqgkoaphpplwqmlhg.jpg";
        // console.log("----- album pic result ", albumPicResult);
      } catch (error) {
        console.error("Error uploading local album picture:", error);
        // Handle the error, you may choose to send a response or continue without the image
      }
    }

    if (artistPic) {
      // console.log("artist pic ****", artistPic);
      try {
        const artistPicResult = await cloudinary.uploader.upload(
          artistPic.path
        );
        artistPicUrl = artistPicResult.secure_url;
        console.log("----- artist pic result ", artistPicResult);
      } catch (error) {
        console.error("Error uploading artist picture:", error);
        // Handle the error, you may choose to send a response or continue without the image
      }
    } else {
      // const localArtistPic = path.join(
      //   __dirname,
      //   "/images/photo-1589903308904-1010c2294adc.jpg"
      // );
      try {
        artistPicUrl =
          "https://res.cloudinary.com/de17diqhx/image/upload/v1707851454/jtr4ybzahkgqfav9xyxg.jpg";
        // console.log("----- album pic result ", albumPicResult);
      } catch (error) {
        console.error("Error uploading local artist picture:", error);
        // Handle the error, you may choose to send a response or continue without the image
      }
    }

    // console.log(" ==== ", albumPicUrl);
    // console.log(" ==== ", artistPicUrl);
    // Create song record in the database
    const song = await Song.create({
      title,
      album,
      artist,
      genre,
      albumPic: albumPicUrl,
      artistPic: artistPicUrl,
      musicDuration: musicDuration,
    });

    const filesToDelete = [];
    if (req.files && req.files.albumPic) {
      filesToDelete.push(req.files.albumPic[0].path);
    }
    if (req.files && req.files.artistPic) {
      filesToDelete.push(req.files.artistPic[0].path);
    }

    try {
      await Promise.all(
        filesToDelete.map((filePath) => fs.promises.unlink(filePath))
      );
    } catch (error) {
      console.error("Error deleting files:", error);
    }
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
    res.status(500).json({ error: error.message });
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
      songId: songId,
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

    // Aggregate additional data about the album
    const albumData = await Song.aggregate([
      {
        $match: { album: { $regex: new RegExp(album, "i") } },
      },
      {
        $group: {
          _id: "$album",
          artist: { $first: "$artist" }, // Assuming all songs in the album have the same artist
          albumPic: { $first: "$albumPic" }, // Assuming the album picture is the same for all songs in the album
        },
      },
      {
        $project: {
          albumName: "$_id",
          artist: 1,
          albumPic: 1,
          _id: 0,
        },
      },
    ]);

    // Extract the aggregated data
    const [{ albumName, artist, albumPic }] = albumData;

    // Send the response with songs and additional album data
    res
      .status(200)
      .json({ albumName, artist, albumPic, total: songs.length, songs });

    res.status(200).json({ total: songs.length, songs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

//album
//albumPic

exports.StatsInfo = asyncHandler(async (req, res) => {
  try {
    const songs = await Song.find({});
    console.log("song for test ", songs);
    const stats = await Song.aggregate([
      {
        $group: {
          _id: null,
          totalSongs: { $sum: 1 }, // Count total number of songs
          uniqueAlbums: { $addToSet: "$album" }, // Get unique albums
          uniqueArtists: { $addToSet: "$artist" }, // Get unique artists
          uniqueGenres: { $addToSet: "$genre" }, // Get unique genres
        },
      },
      {
        $project: {
          _id: 0,
          totalSongs: 1, // Corrected field name
          totalUniqueAlbums: { $size: "$uniqueAlbums" }, // Count unique albums
          totalUniqueArtists: { $size: "$uniqueArtists" }, // Count unique artists
          totalUniqueGenres: { $size: "$uniqueGenres" }, // Count unique genres
        },
      },
    ]);

    if (stats.length === 0) {
      // If the stats array is empty, return default values
      res.status(200).json({
        totalSongs: 0,
        totalAlbums: 0,
        totalArtists: 0,
        totalGenres: 0,
      });
    } else {
      // Extract the result
      const [result] = stats;

      // console.log("stats == ", stats);
      res.status(200).json(result);
      console.log("stats result== ", result);
    }
    // res.status(200).json({
    //   stats,
    // });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
