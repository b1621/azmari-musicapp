import styled from "@emotion/styled";
import HeaderComponent from "../components/HeaderComponent";

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
const AlbumDetail = () => {
  return (
    <Box>
      <HeaderComponent backgroundImage="">
        <Header>
          <AlbumImage src="https://www.okayafrica.com/media-library/rophnan-sidist.jpg?id=30180718&width=1245&height=700&quality=85&coordinates=0%2C437%2C0%2C437" />
          <AlbumInfo>
            <div>Album</div>
            <AlbumTitle>Six 6</AlbumTitle>
            <div>Rophnan - 2023 - 12songs</div>
          </AlbumInfo>
        </Header>
      </HeaderComponent>
    </Box>
  );
};

export default AlbumDetail;
