import styled from "@emotion/styled";
import { IoMdClose } from "react-icons/io";

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0.5;
  z-index: 10;
  background-color: #111111;
`;

const FormBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1d2339;
  color: white;
  border-radius: 10px;
  width: 40%;
  padding: 20px;
  z-index: 11;
`;
const Header = styled.div`
  display: flex;
  justify-content: end;
`;

const Title = styled.h1`
  text-align: center;
  color: #d27e4e;
`;
const Close = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;
const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 100%;
`;
const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const InputField = styled.input`
  padding: 10px;
  margin-top: 3px;
  border-radius: 5px;
  outline: none;
  color: white;
  border: 1px solid gray;
  background-color: transparent;

  transition: all 0.3s ease;
  &:focus {
    border-color: green;
  }
`;
const InputFile = styled.input`
  margin-top: 3px;
  padding: 7px 0;
  border-radius: 5px;
  outline: none;
  color: white;
  border: 1px solid gray;
  background-color: transparent;

  transition: all 0.3s ease;
  &:focus {
    border-color: green;
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: #d27e4e;
  padding: 10px 0;

  &:hover {
    background-color: #d27c4c;
  }
`;
const Container = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 45% 45%;
`;

const AddMusic = ({ setIsOpen }) => {
  return (
    <>
      <BackgroundOverlay />
      <FormBox>
        <Header>
          <Close onClick={() => setIsOpen(false)}>
            <IoMdClose size={21} />
          </Close>
        </Header>
        <Title>Add Music</Title>
        <form>
          <Container>
            <>
              <InputCont>
                <label htmlFor="title">Title</label>
                <InputField type="text" id="title" />
              </InputCont>
              <InputCont>
                <label htmlFor="artist">Artist</label>
                <InputField type="text" id="artist" />
              </InputCont>
            </>
            <>
              <InputCont>
                <label htmlFor="album">Album</label>
                <InputField type="text" id="album" />
              </InputCont>
              <InputCont>
                <label htmlFor="genre">Genre</label>
                <InputField type="text" id="genre" />
              </InputCont>
            </>
            <>
              <InputCont>
                <label htmlFor="albumPic">Album Image</label>
                <InputFile id="albumPic" type="file" />
              </InputCont>
              <InputCont>
                <label htmlFor="artistPic">Artist Image</label>
                <InputFile type="file" id="artistPic" />
              </InputCont>
            </>
            <>
              <InputCont>
                <Button>+ Add Music</Button>
              </InputCont>
            </>
          </Container>
        </form>
      </FormBox>
    </>
  );
};

export default AddMusic;
