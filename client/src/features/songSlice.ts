import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song, MusicCreated, SongDelete, GetSong } from "../utils/types";

interface InitialState {
  isLoading: boolean;
  songslist: Song[];
  openAddSongModal: boolean;
  error: string | null;
  totalSongs: number;
}

const initialState: InitialState = {
  songslist: [],

  totalSongs: 0,
  openAddSongModal: false,
  isLoading: false,
  error: null,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    addNewMusic(state, _action: PayloadAction<any>) {
      state.isLoading = true;
    },
    addNewMusicSuccess: (state, action: PayloadAction<MusicCreated>) => {
      state.isLoading = false;
      console.log("success slice === ", action);

      state.songslist.push(action.payload.song);
    },
    addNewMusicFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      console.log("failed slice === ", action);
    },
    deleteMusic(state, _action: PayloadAction<string>) {
      state.isLoading = true;
    },
    deleteMusicSuccess: (state, action: PayloadAction<SongDelete>) => {
      state.isLoading = false;
      console.log("success slice === ", action);
      const deletedSongId = action.payload.songId;
      state.songslist = state.songslist.filter(
        (song) => song._id !== deletedSongId
      );
      state.totalSongs = state.totalSongs > 0 ? state.totalSongs - 1 : 0;
    },
    deleteMusicFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      console.log("failed slice === ", action);
    },

    getSongs(state) {
      state.isLoading = true;
      state.error = null;
    },
    getSongsSuccess(state, action: PayloadAction<GetSong>) {
      state.isLoading = false;
      state.error = null;
      state.songslist = action.payload.songs;
      state.totalSongs = action.payload.total;
      console.log("songs action == ", action);
    },
    getSongsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  deleteMusic,
  deleteMusicFailure,
  deleteMusicSuccess,
  getSongs,
  getSongsSuccess,
  getSongsFailure,
  addNewMusic,
  addNewMusicSuccess,
  addNewMusicFailure,
} = songSlice.actions;
export default songSlice.reducer;
