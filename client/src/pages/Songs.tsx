import styled from "@emotion/styled";
import TableLayout from "../components/TableLayout";
import TableRow from "../components/TableRow";
import TableData from "../components/TableData";
import Button from "../components/Button";
import HeaderComponent from "../components/HeaderComponent";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useState, useEffect } from "react";
import AddMusic from "./AddMusic";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getSongs } from "../features/songSlice";
import moment from "moment";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteModal from "../components/DeleteModal";
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
  isLoading: boolean;
  error: string;
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
const DeleteButton = styled.button`
  color: #dd5235;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Songs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  // const dispatch = useDispatch()
  // const { songslist } = useSelector((state: RootState) => state.song);
  const { songslist, totalSongs, isLoading, error } = useSelector(
    (state: RootState) => state.song
  ) as SongsState;
  // console.log("state == ", songslist);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error>Error: {error}</Error>;
  }
  return (
    <Box>
      {isOpen && <AddMusic setIsOpen={setIsOpen} />}
      {isDeleteOpen && <DeleteModal setIsDeleteOpen={setIsDeleteOpen} />}
      <HeaderComponent backgroundImage="austin-neill-hgO1wFPXl3I-unsplash.jpg">
        {/* <HeaderComponent backgroundImage="geo-chierchia-o-9-fSSiCT0-unsplash.jpg"> */}
        <Header>
          <H1>Songs</H1>
          <H2>Total of {totalSongs} Songs</H2>
        </Header>
      </HeaderComponent>
      <HeaderStyled>
        <Button handleClick={handleClick}>+ Add Task</Button>
      </HeaderStyled>
      <TableLayout
        headerList={[
          "#",
          "Title",
          "Album",
          "Genre",
          "Released date",
          "Music Duration",
          "Action",
        ]}
      >
        {songslist.map((song: Song, index: number) => (
          <TableRow key={index}>
            <TableData>{index + 1}</TableData>
            <TableData>
              <TitleStyled>
                <div>
                  <AritstImage src={song.artistPic} />
                </div>
                <div>
                  <h2>{song.title}</h2>
                  <p>{song.artist}</p>
                </div>
              </TitleStyled>
            </TableData>
            <TableData>{song.album}</TableData>
            <TableData>{song.genre}</TableData>
            <TableData>
              {moment(song.createdAt).format("MMMM Do YYYY")}
            </TableData>

            <TableData>{song.musicDuration}</TableData>
            <TableData>
              <DeleteButton onClick={() => setIsDeleteOpen(true)}>
                <RiDeleteBin6Line size={21} />
              </DeleteButton>
            </TableData>
          </TableRow>
        ))}
      </TableLayout>
    </Box>
  );
};

export default Songs;
