import styled from "@emotion/styled";
import TableLayout from "../components/TableLayout";
import TableRow from "../components/TableRow";
import TableData from "../components/TableData";
import Button from "../components/Button";
import HeaderComponent from "../components/HeaderComponent";
import { useState } from "react";
import AddMusic from "./AddMusic";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
// Define type for a song item
interface Song {
  title: string;
  artist: string;
  artistPhoto: string;
  album: string;
  dateAdded: string;
  musicDuration: string;
}

// Define type for your Redux state
interface SongsState {
  songslist: Song[];
}

const Box = styled.div`
  margin: 10px;
  width: 100%;
`;

const TitleStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const AritstImage = styled.img`
  display: flex;
  width: 70px;
  margin-right: 15px;
  border-radius: 50%;
`;

const HeaderStyled = styled.div`
  padding: 20px 0;
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

const Songs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  // const dispatch = useDispatch()
  // const { songslist } = useSelector((state: RootState) => state.song);
  const { songslist } = useSelector(
    (state: RootState) => state.song
  ) as SongsState;
  console.log("state == ", songslist);

  return (
    <Box>
      {isOpen && <AddMusic />}
      <HeaderComponent backgroundImage="austin-neill-hgO1wFPXl3I-unsplash.jpg">
        {/* <HeaderComponent backgroundImage="geo-chierchia-o-9-fSSiCT0-unsplash.jpg"> */}
        <Header>
          <H1>Songs</H1>
          <H2>Total of x Songs</H2>
        </Header>
      </HeaderComponent>
      <HeaderStyled>
        <Button handleClick={handleClick}>+ Add Task</Button>
      </HeaderStyled>
      <TableLayout headerList={["#", "title", "album", "released date"]}>
        {songslist.map((song: Song, index: number) => (
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
