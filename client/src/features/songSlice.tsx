import { createSlice } from "@reduxjs/toolkit";

interface Song {
  title: string;
  artist: string;
  artistPhoto: string;
  album: string;
  dateAdded: string;
  musicDuration: string;
  totalTrack?: number;
}

interface InitialState {
  songslist: Song[];
}

const initialState: InitialState = {
  songslist: [
    {
      title: "perfect",
      artist: "ed sheeran",
      artistPhoto:
        "https://imgs.search.brave.com/V4n370-nzAIon9wSaDLZqhgBKk1V0H5DCSTftYRC5Ks/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAxL2Ew/Lzk1LzAxYTA5NTIy/ZjIzNGE3NmIzMTE5/MDc2NTMyZjc2YjQw/LmpwZw",
      album: "shape of you",
      dateAdded: "sep 21, 2022",
      musicDuration: "2:22",
    },
    {
      title: "photograph",
      artist: "ed sheeran",
      artistPhoto:
        "https://imgs.search.brave.com/V4n370-nzAIon9wSaDLZqhgBKk1V0H5DCSTftYRC5Ks/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAxL2Ew/Lzk1LzAxYTA5NTIy/ZjIzNGE3NmIzMTE5/MDc2NTMyZjc2YjQw/LmpwZw",
      album: "shape of you",
      dateAdded: "sep 21, 2022",
      musicDuration: "3:20",
    },
    {
      album: "six 6",
      title: "Dese",
      artist: "Rophnan",
      dateAdded: "jan 03, 2023",
      totalTrack: 13,
      musicDuration: "3:20",
      artistPhoto:
        "https://lastfm.freetls.fastly.net/i/u/270x205/90d96b4eecae7662d65b08353d4c9fa3.jpg",
    },
  ],
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    addSong(state, action) {
      state.songslist.push(action.payload);
    },
  },
});

export const { addSong } = songSlice.actions;
export default songSlice.reducer;
