import { Song } from "../utils/types";

import axiosClient from "./axiosClient";

export const fetchAllSongs = (): Promise<Song[]> => {
  const result = axiosClient.get("/") as Promise<Song[]>;
  return result;
};
