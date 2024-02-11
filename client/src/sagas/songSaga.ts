import { takeLatest, put, call, fork } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../utils/types";
import { fetchAllSongs } from "../httpService/songServices";
import { getSongs, getSongsSuccess } from "../features/songSlice";

function* getSongsAsync() {
  try {
    const songs: Song[] = yield call(fetchAllSongs);
    yield put(getSongsSuccess(songs));
  } catch (error) {
    console.log("error ", error);
  }
}

function* watchFetchSongs() {
  yield takeLatest(getSongs.type, getSongsAsync);
}

export const songSagas = [fork(watchFetchSongs)];
