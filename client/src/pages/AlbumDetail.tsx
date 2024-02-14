import styled from "@emotion/styled";
import HeaderComponent from "../components/HeaderComponent";
import TableLayout from "../components/TableLayout";
import TableRow from "../components/TableRow";
import TableData from "../components/TableData";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAlbumDetail } from "../features/albumSlice";
import { RootState } from "../store";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Box = styled.div`
  padding: 10px;
  width: 100%;
`;
const AlbumImage = styled.img`
  width: 25vw;
  height: 100%;
  background-color: #1d2339;
  filter: brightness(0.8);
  margin-right: 20px;

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
const AlbumInfo = styled.div`
  height: fit-content;
`;
const AlbumTitle = styled.div`
  margin: 10px 0;
  font-size: 3.4rem;
`;
const Content = styled.div`
  padding: 30px;
`;

// interface RouteParams {
//   album: string;
// }

const AlbumDetail = () => {
  const dispatch = useDispatch();
  const { album } = useParams();
  // const { album } = useParams<RouteParams>();

  const { albumSongs, albumPic, artist, totalSongs, isLoading, error } =
    useSelector((state: RootState) => state.album);

  useEffect(() => {
    if (album) {
      dispatch(getAlbumDetail(album));
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
          <AlbumImage src={albumPic} />
          <AlbumInfo>
            <div>Album</div>
            <AlbumTitle>{album}</AlbumTitle>
            <div>
              {artist} - 2023 - {totalSongs} songs
            </div>
          </AlbumInfo>
        </Header>
      </HeaderComponent>
      <Content>
        <TableLayout headerList={["#", "Title", "Genre", "Duration"]}>
          {albumSongs.map((song, index) => (
            <TableRow key={index}>
              <TableData> {index + 1}</TableData>
              <TableData> {song.title}</TableData>
              <TableData> {song.genre}</TableData>
              <TableData> {song.musicDuration}</TableData>
            </TableRow>
          ))}
        </TableLayout>
      </Content>
    </Box>
  );
};

export default AlbumDetail;
