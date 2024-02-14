import styled from "@emotion/styled";
import ArtistCover from "../components/ArtistCover";
import HeaderComponent from "../components/HeaderComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtists } from "../features/artistSlice";
import { RootState } from "../store";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Box = styled.div`
  padding: 10px;
  width: 100%;
`;
const ArtistsBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-content: center;
  gap: 40px;
  width: 90%;
  margin: 20px auto;
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
const Artists = () => {
  const { artistsList, isLoading, error } = useSelector(
    (state: RootState) => state.artist
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>Error: {error}</Error>;
  }
  return (
    <Box>
      {/* <HeaderComponent backgroundImage="austin-neill-hgO1wFPXl3I-unsplash.jpg"> */}
      <HeaderComponent backgroundImage="geo-chierchia-o-9-fSSiCT0-unsplash.jpg">
        <Header>
          <H1>Artists</H1>
          <H2>Total of {artistsList.length} Artists</H2>
        </Header>
      </HeaderComponent>
      <ArtistsBox>
        {artistsList.map((artist, index) => (
          <ArtistCover
            key={index}
            artist={artist.artist}
            artistImage={artist.artistPic}
            totalSongs={artist.songCount}
          />
        ))}
      </ArtistsBox>
    </Box>
  );
};

export default Artists;
