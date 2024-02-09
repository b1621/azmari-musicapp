import { configureStore } from "@reduxjs/toolkit";
import songSlice from "./features/songSlice";

export const store = configureStore({
  reducer: { song: songSlice },
});
