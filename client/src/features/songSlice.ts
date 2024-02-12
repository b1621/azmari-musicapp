import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song, Artist } from "../utils/types";

interface InitialState {
  isLoading: boolean;
  songslist: Song[];
  artistsList: Artist[];
  openAddSongModal: boolean;
  error: string | null;
  totalSongs: number;
}

const initialState: InitialState = {
  songslist: [],
  artistsList: [
    {
      artist: "Ed Sheeran",
      artistPhoto:
        "https://imgs.search.brave.com/V4n370-nzAIon9wSaDLZqhgBKk1V0H5DCSTftYRC5Ks/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAxL2Ew/Lzk1LzAxYTA5NTIy/ZjIzNGE3NmIzMTE5/MDc2NTMyZjc2YjQw/LmpwZw",
      totalSongs: 32,
    },
    {
      artist: "Rophnan",
      artistPhoto:
        "https://lastfm.freetls.fastly.net/i/u/270x205/90d96b4eecae7662d65b08353d4c9fa3.jpg",
      totalSongs: 23,
    },
    {
      artist: "Aster Awoke",
      artistPhoto: "https://i.ytimg.com/vi/ULgwcno7gZs/maxresdefault.jpg",
      totalSongs: 50,
    },
    {
      artist: "Alemayehu Eshete",
      artistPhoto:
        "https://imgs.search.brave.com/BIcjMm3CIUprORa8gD0opltWrLvC2bOh6UJd6rp4JAY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZmFtb3VzcGVv/cGxlLmNvbS9wcm9m/aWxlcy90aHVtYnMv/YWxlbWF5ZWh1LWVz/aGV0ZS0xLmpwZw",
      totalSongs: 42,
    },

    {
      artist: "GIGI",
      artistPhoto:
        "https://www.songlines.co.uk/media/1726/gigi-by-jak-kilbey.jpg?anchor=center&mode=crop&width=1200&height=600&rnd=131702477530000000",
      totalSongs: 40,
    },
    {
      artist: "Muhammud Ahmed",
      artistPhoto:
        "https://imgs.search.brave.com/QjOjINEWMPtsYgUUdz5PkSOFgiovjB7wOaiK84txryQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWxh/bXRhLmV0aGlvcGlh/bmFpcmxpbmVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wMS9FdGhpb3Bp/YW4tTXVzaWNpYW5z/LU1BSE1PVUQtQUhN/RUQuanBn",
      totalSongs: 55,
    },
  ],
  totalSongs: 0,
  openAddSongModal: false,
  isLoading: false,
  error: null,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    addSong(state, action) {
      state.songslist.push(action.payload);
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

export const { addSong, getSongs, getSongsSuccess, getSongsFailure } =
  songSlice.actions;
export default songSlice.reducer;
