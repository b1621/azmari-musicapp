import { takeLatest, put, call, fork } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../utils/types.ts";
import { fetchAllSongs } from "../httpService/songServices.ts";
import {
  getSongs,
  getSongsSuccess,
  getSongsFailure,
} from "../features/songSlice.ts";

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

export const songSagas = [fork(watchFetchSongs)];
