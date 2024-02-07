import styled from "@emotion/styled";
import TableLayout from "../components/TableLayout";

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
const Songs = () => {
  return (
    <Box>
      <HeaderBox>
        <Header>
          {/* <BackOpacity>0</BackOpacity> */}
          Songs
        </Header>
      </HeaderBox>
      <TableLayout headerList={["#", "song"]}>
        <div></div>
      </TableLayout>
    </Box>
  );
};

export default Songs;
