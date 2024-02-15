import { takeLatest, put, call, fork } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  SingleArtist,
  AlbumInfo,
  AlbumDetail,
  Music,
  SongDelete,
  GetSong,
  GetArtist,
  MusicCreated,
  Stat,
} from "../utils/types.ts";
import {
  fetchAllSongs,
  fetchAllArtists,
  fetchArtistData,
  fetchAllAlbums,
  fetchAlbumDetail,
  createNewMusicToServer,
  deleteSongServer,
  fetchAllStats,
} from "../httpService/songServices.ts";
import {
  getSongs,
  getSongsSuccess,
  getSongsFailure,
  addNewMusic,
  addNewMusicSuccess,
  addNewMusicFailure,
  deleteMusic,
  deleteMusicFailure,
  deleteMusicSuccess,
  getStat,
  getStatFailure,
  getStatSuccess,
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
    const songs: GetSong = yield call(fetchAllSongs);
    console.log("songs === ", songs);

    yield put(getSongsSuccess(songs));
  } catch (error: any) {
    yield put(getSongsFailure(error.message));
    console.log("error ", error);
  }
}
function* watchFetchSongs() {
  yield takeLatest(getSongs.type, getSongsAsync);
}

function* getArtistsAsync() {
  try {
    const artists: GetArtist = yield call(fetchAllArtists);
    console.log("artists === ", artists);

    yield put(getArtistsSuccess(artists));
  } catch (error: any) {
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
  } catch (error: any) {
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
  } catch (error: any) {
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
  } catch (error: any) {
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
    const song: MusicCreated = yield call(createNewMusicToServer, songPayload);
    console.log("create music ===", song);

    yield put(addNewMusicSuccess(song));
    toast.success("Song Added Success");
  } catch (error: any) {
    yield put(addNewMusicFailure(error.message));
    toast.error("creating song failed");
  }
}

function* watchCreateSong() {
  yield takeLatest(addNewMusic.type, createMusicAsync);
}

// delete song
function* deleteMusicAsync(action: PayloadAction<string>) {
  try {
    const songId: string = action.payload;
    const deletedsong: SongDelete = yield call(deleteSongServer, songId);
    console.log("deletedsong === ", deletedsong);

    yield put(deleteMusicSuccess(deletedsong));
  } catch (error: any) {
    yield put(deleteMusicFailure(error.message));
    console.log("error ", error);
  }
}

function* watchDeleteMusicAsync() {
  yield takeLatest(deleteMusic.type, deleteMusicAsync);
}

// get stat
function* getStatAsync() {
  try {
    const stat: Stat = yield call(fetchAllStats);
    console.log("stat === ", stat);

    yield put(getStatSuccess(stat));
  } catch (error: any) {
    yield put(getStatFailure(error.message));
    console.log("error ", error);
  }
}
function* watchFetchStat() {
  yield takeLatest(getStat.type, getStatAsync);
}

export const songSagas = [
  fork(watchFetchSongs),
  fork(watchFetchArtists),
  fork(watchFetchArtistData),
  fork(watchFetchAlbums),
  fork(watchFetchAlbumDetail),
  fork(watchCreateSong),
  fork(watchDeleteMusicAsync),
  fork(watchFetchStat),
];
