import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
interface AlbumCoverProps {
  albumImage: string;
  artist: string;
  album: string;
  totalTrack: number;
  releasedDate: string;
}

const AlbumBox = styled.div`
  width: 300px;
  padding: 10px;
  cursor: pointer;
  background-color: #272d46;

  @media (max-width: 1400px) {
    width: 250px;
  }
  &:hover {
    background-color: red;
  }
`;
const AlbumImage = styled.img`
  width: 100%;
  height: 180px;
  background-color: #1d2339;
  filter: brightness(0.8);

  @media (max-width: 1400px) {
    height: 120px;
  }
`;
const Content = styled.div``;
const AlbumName = styled.p`
  font-size: 1.3rem;
  padding: 10px 0;
  margin: 0px;
`;
const ArtistName = styled.p`
  color: #d27e4e;
  padding: 0px;
  margin: 0px;
`;
const Div1 = styled.div`
  display: flex;
  padding: 0px;
  margin: 10px 0;
  justify-content: space-between;
  color: #bcbcbc;
  font-size: 0.9rem;
`;
const ReleasedDate = styled.p`
  padding: 0px;
  margin: 0px;
`;
const NumTrack = styled.p`
  padding: 0px;
  margin: 0px;
`;

const AlbumComponent = ({
  albumImage,
  artist,
  album,
  releasedDate,
  totalTrack,
}: AlbumCoverProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const path = `/album/${album}`;
    navigate(path);
    // history.push(path);
  };

  return (
    <AlbumBox onClick={handleClick}>
      <AlbumImage loading="lazy" src={albumImage} />
      <Content>
        <AlbumName>{album}</AlbumName>
        <ArtistName>{artist}</ArtistName>
        <Div1>
          <NumTrack>{totalTrack} Tracks</NumTrack>
          <ReleasedDate>{releasedDate}</ReleasedDate>
        </Div1>
      </Content>
    </AlbumBox>
  );
};

export default AlbumComponent;
