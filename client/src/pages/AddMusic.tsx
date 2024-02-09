import styled from "@emotion/styled";

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0.4;
  z-index: 10;
  background-color: #1d2339;
`;

const FormBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 60%;
  z-index: 11; /* Ensure FormBox is on top of the BackgroundOverlay */
`;
const AddMusic = () => {
  return (
    <>
      <BackgroundOverlay />
      <FormBox>AddMusic</FormBox>
    </>
  );
};

export default AddMusic;
