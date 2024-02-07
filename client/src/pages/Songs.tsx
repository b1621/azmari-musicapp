import styled from "@emotion/styled";

const ImageElement = styled.img`
  width: 85vw;
  height: 40vh;
`;
// width: 85vw;
const HeaderBox = styled.div`
  height: 40vh;
  width: 100%;
  opacity: 0.6;
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
`;

const Songs = () => {
  return (
    <Box>
      <HeaderBox>
        <Header> hello world</Header>
      </HeaderBox>
    </Box>
  );
};

export default Songs;
