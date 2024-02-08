import styled from "@emotion/styled";
import ArtistCover from "../components/ArtistCover";
import HeaderComponent from "../components/HeaderComponent";

const artistsList = [
  {
    artistName: "Ed Sheeran",
    artistImage:
      "https://imgs.search.brave.com/V4n370-nzAIon9wSaDLZqhgBKk1V0H5DCSTftYRC5Ks/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAxL2Ew/Lzk1LzAxYTA5NTIy/ZjIzNGE3NmIzMTE5/MDc2NTMyZjc2YjQw/LmpwZw",
    totalSongs: 32,
  },
  {
    artistName: "Rophnan",
    artistImage:
      "https://lastfm.freetls.fastly.net/i/u/270x205/90d96b4eecae7662d65b08353d4c9fa3.jpg",
    totalSongs: 23,
  },
  {
    artistName: "Aster Awoke",
    artistImage: "https://i.ytimg.com/vi/ULgwcno7gZs/maxresdefault.jpg",
    totalSongs: 50,
  },
  {
    artistName: "Alemayehu Eshete",
    artistImage:
      "https://imgs.search.brave.com/BIcjMm3CIUprORa8gD0opltWrLvC2bOh6UJd6rp4JAY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZmFtb3VzcGVv/cGxlLmNvbS9wcm9m/aWxlcy90aHVtYnMv/YWxlbWF5ZWh1LWVz/aGV0ZS0xLmpwZw",
    totalSongs: 42,
  },

  {
    artistName: "GIGI",
    artistImage:
      "https://www.songlines.co.uk/media/1726/gigi-by-jak-kilbey.jpg?anchor=center&mode=crop&width=1200&height=600&rnd=131702477530000000",
    totalSongs: 40,
  },
  {
    artistName: "Muhammud Ahmed",
    artistImage:
      "https://imgs.search.brave.com/QjOjINEWMPtsYgUUdz5PkSOFgiovjB7wOaiK84txryQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWxh/bXRhLmV0aGlvcGlh/bmFpcmxpbmVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wMS9FdGhpb3Bp/YW4tTXVzaWNpYW5z/LU1BSE1PVUQtQUhN/RUQuanBn",
    totalSongs: 55,
  },
];

const Box = styled.div`
  border: 1px solid red;
  padding: 10px;
  width: 100%;
`;
const ArtistsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid blue;
  justify-content: center;
  align-content: center;
  gap: 20px;
  width: 80%;
  margin: 0px auto;
`;
const Header = styled.div``;
const Artists = () => {
  return (
    <Box>
      <HeaderComponent>
        <Header>
          <h2>Artists</h2>
          <p>Total of {artistsList.length} Artists</p>
        </Header>
      </HeaderComponent>
      <ArtistsBox>
        {artistsList.map((artist, index) => (
          <ArtistCover
            key={index}
            artistName={artist.artistName}
            artistImage={artist.artistImage}
            totalSongs={artist.totalSongs}
          />
        ))}
      </ArtistsBox>
    </Box>
  );
};

export default Artists;
