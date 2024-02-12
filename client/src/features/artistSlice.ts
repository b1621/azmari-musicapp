import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song, Artist } from "../utils/types";

interface InitialState {
  loading: boolean;

  artistsList: Artist[];
  openAddSongModal: boolean;
  error: string | null;
  totalSongs: number;
}

const initialState: InitialState = {
  artistsList: [],
  totalSongs: 0,
  loading: false,
  error: null,
};
