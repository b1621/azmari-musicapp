import styled from "@emotion/styled";
import HeaderComponent from "../components/HeaderComponent";

const Box = styled.div`
  padding: 10px;
  width: 100%;
`;
const Header = styled.div`
  text-align: center;
  padding-top: 8%;
`;
const H1 = styled.div`
  font-size: 4.6rem;
  color: #d27e4e;
`;
const H2 = styled.div`
  font-size: 1.6rem;
  color: #fff;
`;

const Album = () => {
  return (
    <Box>
      {/* <HeaderComponent backgroundImage="y-peyankov-ge256Z4s_jk-unsplash.jpg"> */}
      <HeaderComponent backgroundImage="natalie-cardona-W8BRzoUTHNA-unsplash.jpg">
        <Header>
          <H1>Albums</H1>
          <H2>Total of x Albums</H2>
        </Header>
      </HeaderComponent>
    </Box>
  );
};

export default Album;
