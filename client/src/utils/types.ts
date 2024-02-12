export type GenreBarChartDto = { genre: string; totalSongs: number };

export type Song = {
  _id?: string;
  title: string;
  artist: string;
  artistPhoto: string;
  album: string;
  dateAdded: string;
  musicDuration: string;
  totalTrack?: number;
};

export type Artist = {
  artist: string;
  artistPic: string;
  totalSongs: number;
};

export type ArtistData = {
  title: string;
  artist: string;
  album: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
  artistPic: string;
};

export type SingleArtist = {
  total: number;
  songs: ArtistData[];
};
