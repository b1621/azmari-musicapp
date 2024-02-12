import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Artist, ArtistData, SingleArtist } from "../utils/types";

interface InitialState {
  artistsList: Artist[];
  total: number;
  totalSong: number;
  isLoading: boolean;
  error: string | null;
  totalAlbums: number;
  artistPic: string;
  artistData: ArtistData | [];
}

const initialState: InitialState = {
  artistsList: [],
  artistData: [],
  totalAlbums: 0,
  artistPic: "",
  totalSong: 0,
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
    getArtistsSuccess(state, action: PayloadAction<Artist[]>) {
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

    getArtistData(state) {
      state.isLoading = true;
      state.error = null;
    },
    getArtistDataSuccess(state, action: PayloadAction<SingleArtist>) {
      state.isLoading = false;
      state.error = null;
      state.artistData = action.payload.songs;
      state.totalSong = action.payload.total;
      state.artistPic = action.payload.artistPic;
      state.totalAlbums = action.payload.totalAlbums;
    },
    getArtistDataFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getArtists,
  getArtistsSuccess,
  getArtistsFailure,
  getArtistData,
  getArtistDataFailure,
  getArtistDataSuccess,
} = artistSlice.actions;
export default artistSlice.reducer;
