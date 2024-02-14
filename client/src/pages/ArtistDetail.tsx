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
import Loading from "../components/Loading";
import Error from "../components/Error";

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
  const params = useParams<{ artist: string }>();
  const artist = params.artist;

  const { artistData, totalSong, totalAlbums, artistPic, isLoading, error } =
    useSelector((state: RootState) => state.artist);
  useEffect(() => {
    if (artist) {
      dispatch(getArtistData(artist));
    }
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>Error: {error}</Error>;
  }
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
        <TableLayout headerList={["#", "Title", "Album", "genre", "Duration"]}>
          {artistData.map((song, index) => (
            <TableRow key={index}>
              <TableData> {index + 1}</TableData>
              <TableData> {song.title}</TableData>
              <TableData> {song.album}</TableData>
              <TableData> {song.genre}</TableData>
              <TableData> {song?.musicDuration}</TableData>
            </TableRow>
          ))}
        </TableLayout>
      </Content>
    </Box>
  );
};

export default ArtistDetail;
