import styled from "@emotion/styled";

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

  background-color: #272d46;
`;
const AlbumImage = styled.img`
  width: 100%;
  height: 180px;
  background-color: #1d2339;
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
  return (
    <AlbumBox>
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
