import styled from "@emotion/styled";

interface ArtistCoverProps {
  artistImage: string;
  artistName: string;
  totalSongs: number;
}

const Box = styled.div`
  border: 1px solid green;
`;
const ArtistImage = styled.img`
  border: 1px solid green;
`;

const ArtistCover = ({
  artistImage,
  artistName,
  totalSongs,
}: ArtistCoverProps) => {
  return (
    <Box>
      <ArtistImage src={artistImage} />
      <h2>{artistName}</h2>
      <p>{totalSongs} Songs</p>
    </Box>
  );
};

export default ArtistCover;
