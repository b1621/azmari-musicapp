export type GenreBarChartDto = { genre: string; totalSongs: number };

export type Song = {
  _id?: string;
  totalTrack?: number;
  musicDuration: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
  artistPic: string;
  albumPic: string;
  title?: string;
  artist?: string;
  album?: string;
};

export type GetSong = {
  songs: Song[];
  total: number;
  error?: string;
};

export type Artist = {
  artist: string;
  artistPic: string;

  songCount: number;
};
export type GetArtist = {
  total: number;
  artists: Artist[];
};
export type ArtistData = {
  title: string;
  artist: string;
  album: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
  artistPic: string;
  musicDuration: string;
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
  musicDuration: string;
};
export type AlbumDetail = {
  albumName: string;
  artist: string;
  albumPic: string;
  total: number;
  songs: AlbumSong[];
};

export type Music = {
  _id?: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  musicDuration: string;
  artistPic: object | null;
  albumPic: object | null;
};

export type MusicCreated = {
  message: string;
  song: Song;
};

export type SongDelete = {
  message: string;
  songId: string;
};
