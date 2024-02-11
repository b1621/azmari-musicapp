// import { call, put } from "redux-saga/effects";
// import { takeLatest } from "redux-saga";

// import {
//   fetchPhotosStart,
//   fetchPhotosSuccess,
//   fetchPhotosFailure,
// } from "./photoSlice";

// import axios from "axios";

// function* fetchPhotos() {
//   try {
//     const response = yield call(
//       axios.get,"https://jsonplaceholder.typicode.com/photos"
//     );
//     yield put(fetchPhotosSuccess(response.data));
//   } catch (error) {
//     yield put(fetchPhotosFailure(error.message));
//   }
// }

// export function* photoSaga() {
//   yield takeLatest(fetchPhotosStart.type, fetchPhotos);
// }
