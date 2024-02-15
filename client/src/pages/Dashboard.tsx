import styled from "@emotion/styled";
// import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStat } from "../features/songSlice";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { RootState } from "../store";
import { Stat } from "../utils/types";
const Box = styled.div`
  box-sizing: border-box;
  margin: 60px;
  width: 90%;

  @media screen and (max-width: 768px) {
    margin: 50px 30px;
  }
`;
const Container = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 80px;
  @media screen and (max-width: 768px) {
    gap: 50px;
    flex-direction: column;
  }
`;
const ContentCard = styled.div`
  width: 380px;
  height: 220px;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BackgroundImage = styled.div<{ backgroundImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  filter: brightness(0.3); /* Adjust the brightness value as needed */
`;

const Content = styled.div`
  flex-direction: column;
  position: relative;
  z-index: 1; /* Ensure the text is above the background image */
  text-align: center;
`;
const Title = styled.div`
  margin-top: 20%;
  font-size: 2rem;
  color: #d27e4e;
`;
const H2 = styled.p`
  margin-top: 0px;
  font-size: 1.5rem;
`;
interface StatState {
  stat: Stat;
  isLoading: boolean;
  error: string;
}
const Dashboard = () => {
  const dispatch = useDispatch();
  const { stat, isLoading, error } = useSelector(
    (state: RootState) => state.song
  ) as StatState;
  useEffect(() => {
    // fetchAllStats();
    dispatch(getStat());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>Error: {error}</Error>;
  }

  return (
    <Box>
      <Container>
        <ContentCard>
          <BackgroundImage backgroundImage={"/image-asset.jpg"} />
          <Content>
            <Title>Songs</Title>
            <H2>{stat.totalSongs}</H2>
          </Content>
        </ContentCard>
        <ContentCard>
          <BackgroundImage
            backgroundImage={"/360_F_565699512_WsMiVJCVoyVJhy0X.jpg"}
          />
          <Content>
            <Title>Artists</Title>
            <H2>{stat.totalUniqueArtists}</H2>
          </Content>
        </ContentCard>
        <ContentCard>
          <BackgroundImage
            backgroundImage={"/erik-mclean-9y1cTVKe1IY-unsplash.jpg"}
          />
          <Content>
            <Title>Albums</Title>
            <H2>{stat.totalUniqueAlbums}</H2>
          </Content>
        </ContentCard>
        <ContentCard>
          <BackgroundImage backgroundImage={"/1_aV1RSXfZYdvT5gfDUblCA.jpg"} />
          <Content>
            <Title>Genre</Title>
            <H2>{stat.totalUniqueGenres}</H2>
          </Content>
        </ContentCard>
      </Container>
    </Box>
  );
};

export default Dashboard;
