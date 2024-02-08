import styled from "@emotion/styled";
import HeaderComponent from "../components/HeaderComponent";
// import TableLayout from "../components/TableLayout";
// import TableRow from "../components/TableRow";
// import TableData from "../components/TableData";

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
const ArtistDetail = () => {
  return (
    <Box>
      <HeaderComponent backgroundImage="">
        <Header>
          <ArtistImage src="https://www.okayafrica.com/media-library/rophnan-sidist.jpg?id=30180718&width=1245&height=700&quality=85&coordinates=0%2C437%2C0%2C437" />
          <ArtistInfo>
            <div>Artist</div>
            <AlbumTitle>Rophnan</AlbumTitle>
            <div>1 Album - 12 songs</div>
          </ArtistInfo>
        </Header>
      </HeaderComponent>{" "}
    </Box>
  );
};

export default ArtistDetail;
