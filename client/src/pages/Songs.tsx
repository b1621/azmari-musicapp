import styled from "@emotion/styled";
import TableLayout from "../components/TableLayout";
import TableRow from "../components/TableRow";
import TableData from "../components/TableData";

const ImageElement = styled.img`
  width: 85vw;
  height: 40vh;
`;
// width: 85vw;
// opacity: 0.6;
const HeaderBox = styled.div`
  height: 36vh;
  border: 1px solid #1d2339;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  background-image: url(${"austin-neill-hgO1wFPXl3I-unsplash.jpg"});
  background-size: cover; /* Adjusts the size of the background image to cover the entire div */
  background-position: center; /* Centers the background image within the div */
`;
const Box = styled.div`
  margin: 10px;
  width: 100%;
`;
const Header = styled.h2`
  text-align: center;
  display: relative;
`;
// const BackOpacity = styled.div`
//   display: absolute;
//   border: 1px solid green;
//   height: 100%;
// `;
const songslist = [
  {
    title: "perfect",
    artist: "ed sheeran",
    artistPhoto:
      "https://imgs.search.brave.com/V4n370-nzAIon9wSaDLZqhgBKk1V0H5DCSTftYRC5Ks/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAxL2Ew/Lzk1LzAxYTA5NTIy/ZjIzNGE3NmIzMTE5/MDc2NTMyZjc2YjQw/LmpwZw",
    album: "shape of you",
    dateAdded: "sep 21, 2022",
    musicDuration: "2:22",
  },
  {
    title: "photograph",
    artist: "ed sheeran",
    artistPhoto:
      "https://imgs.search.brave.com/V4n370-nzAIon9wSaDLZqhgBKk1V0H5DCSTftYRC5Ks/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAxL2Ew/Lzk1LzAxYTA5NTIy/ZjIzNGE3NmIzMTE5/MDc2NTMyZjc2YjQw/LmpwZw",
    album: "shape of you",
    dateAdded: "sep 21, 2022",
    musicDuration: "3:20",
  },
];

const TitleStyled = styled.div`
  dispay: flex;
  flex-direction: row;
  border-1px solid blue;
`;
const AritstImage = styled.img`
  dispay: flex;
  width: 70px;
  border-radius: 50%;
`;
const Songs = () => {
  return (
    <Box>
      <HeaderBox>
        <Header>
          {/* <BackOpacity>0</BackOpacity> */}
          Songs
        </Header>
      </HeaderBox>
      <TableLayout headerList={["#", "title", "album", "released date"]}>
        {songslist.map((song, index) => (
          <TableRow key={index}>
            <TableData>{index + 1}</TableData>
            <TableData>
              <TitleStyled>
                <div>
                  <AritstImage src={song.artistPhoto} />
                </div>
                <div>
                  <h2>{song.title}</h2>
                  <p>{song.artist}</p>
                </div>
              </TitleStyled>
            </TableData>
            <TableData>{song.album}</TableData>
            <TableData>{song.dateAdded}</TableData>
            <TableData>{song.musicDuration}</TableData>
          </TableRow>
        ))}
      </TableLayout>
    </Box>
  );
};

export default Songs;
