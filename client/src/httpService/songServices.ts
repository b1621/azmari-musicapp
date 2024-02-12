import { Song } from "../utils/types";

import axiosClient from "./axiosClient";

export const fetchAllSongs = (): Promise<Song[]> => {
  const result = axiosClient.get("/song/") as Promise<Song[]>;
  console.log("fetch songs result == ", result);

  return result;
};
