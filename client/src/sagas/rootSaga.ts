import { all } from "redux-saga/effects";
import { songSagas } from "./songSaga.ts";
// import { dashboardSagas } from "./dashboardSaga";

export default function* rootSaga() {
  console.log("Root Saga is executed"); // Add this console log
  yield all([...songSagas]);
}
