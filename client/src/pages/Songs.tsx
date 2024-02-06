import styled from "@emotion/styled";

const ImageElement = styled.img`
  width: 85vw;
  height: 40vh;
`;
const HeaderBox = styled.img`
  width: 85vw;
  border: 1px solid brown;
  height: 40vh;
`;
const Box = styled.div`
  margin: 10px;
`;

const Songs = () => {
  return (
    <Box>
      <HeaderBox>
        {/* <ImageElement src="/austin-neill-hgO1wFPXl3I-unsplash.jpg" alt="" /> */}
      </HeaderBox>
    </Box>
  );
};

export default Songs;
