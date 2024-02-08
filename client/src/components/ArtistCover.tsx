import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface ArtistCoverProps {
  artistImage: string;
  artist: string;
  totalSongs: number;
}

const Box = styled.div`
  display: flex;
  max-width: 200px;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  text-align: center;
  padding: 5px 20px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
// background-color: #3c4258;
// background-color: #272d46;
const ArtistImage = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 90%;
  align-self: stretch;
  border-radius: 50%;
  background-color: #1d2339;
  width: 160px; /* Default width */
  height: 160px; /* Default height */
`;
const Div2 = styled.div`
  color: #fff;
  margin-top: 16px;
  font: 22px Inter, sans-serif;
`;

const Div3 = styled.div`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 12px;
  white-space: nowrap;
  font: 18px Inter, sans-serif;
`;
const ArtistCover = ({ artistImage, artist, totalSongs }: ArtistCoverProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const path = `/artist/${artist}`;
    navigate(path);
    // history.push(path);
  };
  return (
    <Box onClick={handleClick}>
      <ArtistImage loading="lazy" src={artistImage} />
      <Div2>{artist}</Div2>
      <Div3>{totalSongs}</Div3>
    </Box>
  );
};

export default ArtistCover;
