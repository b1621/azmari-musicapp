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

export type OverallStatDto = {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
};

export type GenreSongCountDto = {
  genre: string;
  totalSongs: number;
};

export type ArtistStatDto = {
  artist: string;
  totalSongs: number;
  totalAlbums: number;
};

export type AlbumSongCountDto = {
  album: string;
  totalSongs: number;
};
