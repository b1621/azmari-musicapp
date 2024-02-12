import styled from "@emotion/styled";
import HeaderComponent from "../components/HeaderComponent";
import TableLayout from "../components/TableLayout";
import TableRow from "../components/TableRow";
import TableData from "../components/TableData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArtistData } from "../features/artistSlice";
import { useParams } from "react-router-dom";
import { RootState } from "../store";

// const songsList = [
//   {
//     id: 1,
//     title: "qal",
//     album: "six",
//     musicDuration: "3:30",
//   },
//   {
//     id: 2,
//     title: "fole",
//     album: "six",
//     musicDuration: "3:10",
//   },
//   {
//     id: 3,
//     title: "dese",
//     album: "six",
//     musicDuration: "2:50",
//   },
//   {
//     id: 4,
//     title: "haya",
//     album: "six",
//     musicDuration: "4:30",
//   },
// ];
const Box = styled.div`
  padding: 10px;
  width: 100%;
`;
const ArtistImage = styled.img`
  width: 18vw;
  border-radius: 50%;
  background-color: #1d2339;
  filter: brightness(0.7);
  margin-right: 20px;
  height: 200px;

  @media (max-width: 1400px) {
    height: 190px;
  }
`;
const Header = styled.div`
  display: flex;
  padding: 20px 40px;
  align-items: center;

  align-content: center;
`;
const ArtistInfo = styled.div`
  height: fit-content;
`;
const AlbumTitle = styled.div`
  margin: 10px 0;
  font-size: 3.4rem;
`;
const Content = styled.div`
  padding: 30px;
`;
const ArtistDetail = () => {
  const dispatch = useDispatch();
  const { artist } = useParams();

  const { artistData, totalSong, totalAlbums, artistPic, isLoading, error } =
    useSelector((state: RootState) => state.artist);
  useEffect(() => {
    dispatch(getArtistData(artist));
  }, [dispatch]);
  return (
    <Box>
      <HeaderComponent backgroundImage="">
        <Header>
          <ArtistImage src={artistPic} />
          <ArtistInfo>
            <div>Artist</div>
            <AlbumTitle>{artist}</AlbumTitle>
            <div>
              {totalAlbums} Album - {totalSong} songs
            </div>
          </ArtistInfo>
        </Header>
      </HeaderComponent>{" "}
      <Content>
        <TableLayout headerList={["#", "Title", "Album", "Duration"]}>
          {artistData.map((song, index) => (
            <TableRow key={index}>
              <TableData> {index + 1}</TableData>
              <TableData> {song.title}</TableData>
              <TableData> {song.album}</TableData>
              <TableData> {song?.musicDuration}</TableData>
            </TableRow>
          ))}
        </TableLayout>
      </Content>
    </Box>
  );
};

export default ArtistDetail;
