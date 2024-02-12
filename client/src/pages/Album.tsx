import styled from "@emotion/styled";
import HeaderComponent from "../components/HeaderComponent";
import AlbumComponent from "../components/AlbumComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAlbumsList } from "../features/albumSlice";
import { RootState } from "../store";

const Box = styled.div`
  padding: 10px;
  width: 100%;
`;
const Header = styled.div`
  text-align: center;
  padding-top: 6%;
`;
const H1 = styled.div`
  font-size: 4.6rem;
  color: #d27e4e;
`;
const H2 = styled.div`
  font-size: 1.6rem;
  color: #fff;
`;
const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 20px;
  gap: 50px;
  flex-wrap: wrap;
`;

const Album = () => {
  const { albumsList } = useSelector((state: RootState) => state.album);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbumsList());
  }, [dispatch]);
  return (
    <Box>
      {/* <HeaderComponent backgroundImage="y-peyankov-ge256Z4s_jk-unsplash.jpg"> */}
      <HeaderComponent backgroundImage="natalie-cardona-W8BRzoUTHNA-unsplash.jpg">
        <Header>
          <H1>Albums</H1>
          <H2>Total of x Albums</H2>
        </Header>
      </HeaderComponent>
      <ContentBox>
        {albumsList.map((album, index) => (
          <AlbumComponent
            key={index}
            album={album.album}
            artist={album.artist}
            // albumImage={album.albumImage}
            totalTrack={album.songCount}
            releasedDate={album.createdAt}
          />
        ))}
      </ContentBox>
    </Box>
  );
};

export default Album;
