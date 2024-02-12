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
  totalAlbums: number;
  artistPic: string;
  songs: ArtistData[];
};

export type AlbumData = {
  artist: string;
  songCount: number;
  createdAt: string;
  album: string;
  albumPic: string;
};

export type AlbumInfo = {
  total: number;
  albums: AlbumData[];
};

export type AlbumSong = {
  title: string;
  artist: string;
  album: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
  artistPic: string;
  albumPic: string;
};
export type AlbumDetail = {
  albumName: string;
  artist: string;
  albumPic: string;
  total: number;
  songs: AlbumSong[];
};
