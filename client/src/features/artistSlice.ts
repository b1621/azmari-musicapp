import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song, Artist } from "../utils/types";

interface InitialState {
  artistsList: Artist[];
  total: number;
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  artistsList: [],
  total: 0,
  loading: false,
  error: null,
};

const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    getArtists(state) {
      state.loading = true;
      state.error = null;
    },
    getArtistsSuccess(state, action: PayloadAction<Song[]>) {
      state.loading = false;
      state.error = null;
      state.artistsList = action.payload.artists;
      state.total = action.payload.total;
      console.log("songs action == ", action);
    },
    getArtistsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getArtists, getArtistsSuccess, getArtistsFailure } =
  artistSlice.actions;
export default artistSlice.reducer;
