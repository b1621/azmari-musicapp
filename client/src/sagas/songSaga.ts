import { takeLatest, put, call, fork } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Song, Artist, SingleArtist } from "../utils/types.ts";
import {
  fetchAllSongs,
  fetchAllArtists,
  fetchArtistData,
} from "../httpService/songServices.ts";
import {
  getSongs,
  getSongsSuccess,
  getSongsFailure,
} from "../features/songSlice.ts";
import {
  getArtists,
  getArtistsSuccess,
  getArtistsFailure,
  getArtistData,
  getArtistDataFailure,
  getArtistDataSuccess,
} from "../features/artistSlice.ts";

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

export const songSagas = [
  fork(watchFetchSongs),
  fork(watchFetchArtists),
  fork(watchFetchArtistData),
];
