import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlbumData, AlbumInfo } from "../utils/types";

interface InitialState {
  albumsList: AlbumData[];
  totalAlbums: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  albumsList: [],
  totalAlbums: 0,
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
  },
});

export const { getAlbumsList, getAlbumsListSuccess, getAlbumsListFailure } =
  albumSlice.actions;
export default albumSlice.reducer;
