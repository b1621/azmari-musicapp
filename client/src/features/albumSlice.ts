import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlbumData, AlbumDetail, AlbumInfo, AlbumSong } from "../utils/types";

interface InitialState {
  albumsList: AlbumData[];
  totalAlbums: number;
  isLoading: boolean;
  error: string | null;
  albumSongs: AlbumSong[];
  album: string;
  artist: string;
  albumPic: string;
  totalSongs: number;
}

const initialState: InitialState = {
  albumsList: [],
  totalAlbums: 0,
  albumSongs: [],
  album: "",
  artist: "",
  albumPic: "",
  totalSongs: 0,
  isLoading: false,
  error: null,
};

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    getAlbumsList(state) {
      state.isLoading = true;
      state.error = null;
    },
    getAlbumsListSuccess(state, action: PayloadAction<AlbumInfo>) {
      state.isLoading = false;
      state.error = null;
      state.albumsList = action.payload.albums;
      state.totalAlbums = action.payload.total;
    },
    getAlbumsListFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getAlbumDetail(state) {
      state.isLoading = true;
      state.error = null;
    },
    getAlbumDetailSuccess(state, action: PayloadAction<AlbumDetail>) {
      state.isLoading = false;
      state.error = null;
      state.albumSongs = action.payload.songs;
      state.totalSongs = action.payload.total;
      state.album = action.payload.albumName;
      state.artist = action.payload.artist;
      state.albumPic = action.payload.albumPic;
    },
    getAlbumDetailFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getAlbumsList, getAlbumsListSuccess, getAlbumsListFailure } =
  albumSlice.actions;
export default albumSlice.reducer;
