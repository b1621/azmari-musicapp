import { takeLatest, put, call, fork } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  Song,
  Artist,
  SingleArtist,
  AlbumInfo,
  AlbumDetail,
  Music,
} from "../utils/types.ts";
import {
  fetchAllSongs,
  fetchAllArtists,
  fetchArtistData,
  fetchAllAlbums,
  fetchAlbumDetail,
  createNewMusicToServer,
} from "../httpService/songServices.ts";
import {
  getSongs,
  getSongsSuccess,
  getSongsFailure,
  addNewMusic,
  addNewMusicSuccess,
  addNewMusicFailure,
} from "../features/songSlice.ts";
import {
  getArtists,
  getArtistsSuccess,
  getArtistsFailure,
  getArtistData,
  getArtistDataFailure,
  getArtistDataSuccess,
} from "../features/artistSlice.ts";
import {
  getAlbumsList,
  getAlbumsListSuccess,
  getAlbumsListFailure,
  getAlbumDetail,
  getAlbumDetailFailure,
  getAlbumDetailSuccess,
} from "../features/albumSlice.ts";
import { toast } from "react-toastify";

function* getSongsAsync() {
  try {
    const songs: Song[] = yield call(fetchAllSongs);
    console.log("songs === ", songs);

    yield put(getSongsSuccess(songs));
  } catch (error) {
    yield put(getSongsFailure(error.message));
    console.log("error ", error);
  }
}
function* watchFetchSongs() {
  yield takeLatest(getSongs.type, getSongsAsync);
}

function* getArtistsAsync() {
  try {
    const artists: Artist[] = yield call(fetchAllArtists);
    console.log("artists === ", artists);

    yield put(getArtistsSuccess(artists));
  } catch (error) {
    yield put(getArtistsFailure(error.message));
    console.log("error ", error);
  }
}

function* watchFetchArtists() {
  yield takeLatest(getArtists.type, getArtistsAsync);
}

// single artist detail
function* getArtistDataAsync(action: PayloadAction<string>) {
  try {
    const artistName: string = action.payload;
    const artists: SingleArtist = yield call(fetchArtistData, artistName);
    console.log("artists === ", artists);

    yield put(getArtistDataSuccess(artists));
  } catch (error) {
    yield put(getArtistDataFailure(error.message));
    console.log("error ", error);
  }
}

function* watchFetchArtistData() {
  yield takeLatest(getArtistData.type, getArtistDataAsync);
}

// fetch albums
function* getAlbumsAsync() {
  try {
    const albums: AlbumInfo = yield call(fetchAllAlbums);
    console.log("albums === ", albums);

    yield put(getAlbumsListSuccess(albums));
  } catch (error) {
    yield put(getAlbumsListFailure(error.message));
    console.log("error ", error);
  }
}

function* watchFetchAlbums() {
  yield takeLatest(getAlbumsList.type, getAlbumsAsync);
}

// single album detail
function* getAlbumDetailAsync(action: PayloadAction<string>) {
  try {
    const albumName: string = action.payload;
    const albumDetail: AlbumDetail = yield call(fetchAlbumDetail, albumName);
    console.log("albumDetail === ", albumDetail);

    yield put(getAlbumDetailSuccess(albumDetail));
  } catch (error) {
    yield put(getAlbumDetailFailure(error.message));
    console.log("error ", error);
  }
}

function* watchFetchAlbumDetail() {
  yield takeLatest(getAlbumDetail.type, getAlbumDetailAsync);
}

// create music
function* createMusicAsync({ payload }: PayloadAction<Music>) {
  try {
    const songPayload = payload;
    const song: Music = yield call(createNewMusicToServer, songPayload);
    console.log("create music ===", song);

    yield put(addNewMusicSuccess(song));
    toast.success("Song Added Success");
  } catch (error) {
    yield put(addNewMusicFailure(error.message));
    toast.error("creating song failed");
  }
}

function* watchCreateSong() {
  yield takeLatest(addNewMusic.type, createMusicAsync);
}

export const songSagas = [
  fork(watchFetchSongs),
  fork(watchFetchArtists),
  fork(watchFetchArtistData),
  fork(watchFetchAlbums),
  fork(watchFetchAlbumDetail),
  fork(watchCreateSong),
];
