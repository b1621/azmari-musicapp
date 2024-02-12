import { configureStore } from "@reduxjs/toolkit";
// import dashboardReducer from "./features/dashboardSlice";
import songReducer from "./features/songSlice.ts";
import artistReducer from "./features/artistSlice.ts";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga.ts";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    song: songReducer,
    artist: artistReducer,
    // dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
