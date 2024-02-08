import styled from "@emotion/styled";

interface ArtistCoverProps {
  artistImage: string;
  artistName: string;
  totalSongs: number;
}

const Box = styled.div`
  display: flex;
  max-width: 200px;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  text-align: center;
  padding: 0 20px;
  background-color: #272d46;
`;
const ArtistImage = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 100%;
  align-self: stretch;
  border-radius: 50%;
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
const ArtistCover = ({
  artistImage,
  artistName,
  totalSongs,
}: ArtistCoverProps) => {
  return (
    // <Box>
    //   <ArtistImage src={artistImage} />
    //   <h2>{artistName}</h2>
    //   <p>{totalSongs} Songs</p>
    // </Box>
    <Box>
      <ArtistImage loading="lazy" src={artistImage} />
      <Div2>{artistName}</Div2>
      <Div3>{totalSongs}</Div3>
    </Box>
  );
};

export default ArtistCover;

// const Div = styled.div`
//   display: flex;
//   max-width: 200px;
//   flex-direction: column;
//   align-items: center;
//   font-weight: 400;
//   text-align: center;
//   padding: 0 20px;
// `;

// const Img = styled.img`
//   aspect-ratio: 1;
//   object-fit: auto;
//   object-position: center;
//   width: 100%;
//   align-self: stretch;
// `;

// const Div2 = styled.div`
//   color: #fff;
//   margin-top: 16px;
//   font: 22px Inter, sans-serif;
// `;

// const Div3 = styled.div`
//   color: rgba(255, 255, 255, 0.6);
//   margin-top: 12px;
//   white-space: nowrap;
//   font: 18px Inter, sans-serif;
// `;
