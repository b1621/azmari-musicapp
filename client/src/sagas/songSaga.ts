import { takeLatest, put, call, fork } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Song, Artist } from "../utils/types.ts";
import { fetchAllSongs, fetchAllArtists } from "../httpService/songServices.ts";
import {
  getSongs,
  getSongsSuccess,
  getSongsFailure,
} from "../features/songSlice.ts";
import {
  getArtists,
  getArtistsSuccess,
  getArtistsFailure,
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

export const songSagas = [fork(watchFetchSongs), fork(watchFetchArtists)];
