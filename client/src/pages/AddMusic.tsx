import styled from "@emotion/styled";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addNewMusic } from "../features/songSlice";
import axios from "axios";

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
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
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
  margin: 20px 10px;
  cursor: pointer;
  border: 1px solid #d27e4e;

  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #d27e4e;
  }
`;
const Container = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 45% 45%;
`;

const AddMusic = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  // const formDatasToSend = new FormData();
  const [albumPic, setAlbumPic] = useState(null);
  const [artistPic, setArtistPic] = useState(null);
  const [formDatas, setFormDatas] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
    // albumPic: null,
    // artistPic: null,
    musicDuration: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDatas({
      ...formDatas,
      [name]: value,
    });
    // const { name, value, files } = e.target;
    // if (files && files.length) {
    //   setFormDatas({
    //     ...formDatas,
    //     [name]: files[0], // Use the first file selected by the user
    //   });
    // } else {
    //   setFormDatas({
    //     ...formDatas,
    //     [name]: value,
    //   });
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // formDatasToSend.append(formDatas);
    // Here you can do something with the form data, like sending it to an API or processing it.
    console.log("fomr datas  = ", formDatas);
    console.log("albumpic == ", albumPic);
    console.log("artistPic == ", artistPic);

    // console.log("fomr data to send = ", formDatasToSend);
    // Then you might want to close the form

    // console.log("aaaaaa final = ", {
    //   ...formDatas,
    //   albumPic: albumPic
    //     ? { name: albumPic.name, type: albumPic.type, size: artistPic.size }
    //     : null,
    //   artistPic: artistPic
    //     ? { name: artistPic.name, type: artistPic.type, size: artistPic.size }
    //     : null,
    // });

    // dispatch(
    //   addNewMusic({
    //     ...formDatas,
    //     albumPic: albumPic
    //       ? { name: albumPic.name, type: albumPic.type, size: albumPic.size }
    //       : null,
    //     artistPic: artistPic
    //       ? { name: artistPic.name, type: artistPic.type, size: artistPic.size }
    //       : null,
    //   })
    // );
    const somevalue = { ...formDatas, albumPic, artistPic };
    console.log("some value -=== ", somevalue);

    const formData = new FormData();
    Object.keys(somevalue).forEach((key) => {
      formData.append(key, somevalue[key]);
    });

    console.log("formdata coverted ==== ", formData);

    // dispatch(addNewMusic(formData));
    try {
      const response = await axios.post("/api/v1/song/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }

    // setIsOpen(false)
  };

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
        <form onSubmit={handleSubmit}>
          <Container>
            <InputCont>
              <label htmlFor="title">Title</label>
              <InputField
                type="text"
                id="title"
                name="title"
                placeholder="music title"
                value={formDatas.title}
                onChange={handleInputChange}
              />
            </InputCont>
            <InputCont>
              <label htmlFor="artist">Artist</label>
              <InputField
                type="text"
                id="artist"
                name="artist"
                placeholder="artist name"
                value={formDatas.artist}
                onChange={handleInputChange}
              />
            </InputCont>
            <InputCont>
              <label htmlFor="album">Album</label>
              <InputField
                type="text"
                id="album"
                name="album"
                placeholder="album "
                value={formDatas.album}
                onChange={handleInputChange}
              />
            </InputCont>
            <InputCont>
              <label htmlFor="genre">Genre</label>
              <InputField
                type="text"
                id="genre"
                name="genre"
                placeholder="pop"
                value={formDatas.genre}
                onChange={handleInputChange}
              />
            </InputCont>
            <InputCont>
              <label htmlFor="musicDuration">Music Duration</label>
              <InputField
                type="text"
                id="musicDuration"
                name="musicDuration"
                placeholder="0:00"
                value={formDatas.musicDuration}
                onChange={handleInputChange}
              />
            </InputCont>
            <InputCont>
              <label htmlFor="albumPic">Album Image</label>
              <InputFile
                id="albumPic"
                type="file"
                name="albumPic"
                onChange={(e) => {
                  setAlbumPic(e.target.files[0]);
                }}
              />
            </InputCont>
            <InputCont>
              <label htmlFor="artistPic">Artist Image</label>
              <InputFile
                type="file"
                id="artistPic"
                name="artistPic"
                onChange={(e) => {
                  setArtistPic(e.target.files[0]);
                }}
              />
            </InputCont>
          </Container>

          <Button type="submit">+ Add Music</Button>
        </form>
      </FormBox>
    </>
  );
};

export default AddMusic;
