import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song, Artist, Music, MusicCreated } from "../utils/types";

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
    addNewMusic(state, _action: PayloadAction<Music>) {
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

    getSongs(state) {
      state.isLoading = true;
      state.error = null;
    },
    getSongsSuccess(state, action: PayloadAction<Song[]>) {
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
  addSong,
  getSongs,
  getSongsSuccess,
  getSongsFailure,
  addNewMusic,
  addNewMusicSuccess,
  addNewMusicFailure,
} = songSlice.actions;
export default songSlice.reducer;
