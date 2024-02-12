import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song, Artist } from "../utils/types";

interface InitialState {
  artistsList: Artist[];
  total: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  artistsList: [],
  total: 0,
  isLoading: false,
  error: null,
};

const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    getArtists(state) {
      state.isLoading = true;
      state.error = null;
    },
    getArtistsSuccess(state, action: PayloadAction<Song[]>) {
      state.isLoading = false;
      state.error = null;
      state.artistsList = action.payload.artists;
      state.total = action.payload.total;
      console.log("songs action == ", action);
    },
    getArtistsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getArtists, getArtistsSuccess, getArtistsFailure } =
  artistSlice.actions;
export default artistSlice.reducer;
