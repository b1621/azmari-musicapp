import styled from "@emotion/styled";

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
  transform: translate(-50%, -70%);
  background-color: #1d2339;
  color: white;
  border-radius: 10px;
  width: 30%;
  padding: 20px;
  z-index: 11;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 20px;
  cursor: pointer;
  border: none;
`;

const DeleteButton = styled(Button)`
  background-color: #dc381f;
`;

interface DeleteModalProps {
  setIsDeleteOpen: (isOpen: boolean) => void;
  handleConfirm: () => void;
}

const DeleteModal = ({ setIsDeleteOpen, handleConfirm }: DeleteModalProps) => {
  return (
    <>
      <BackgroundOverlay />
      <FormBox>
        <h2>Confirm the action</h2>
        <p>Are you sure you want to confirm?</p>
        <div>
          <Button onClick={() => setIsDeleteOpen(false)}>Cancel</Button>
          <DeleteButton onClick={handleConfirm}>Delete</DeleteButton>
        </div>
      </FormBox>
    </>
  );
};

export default DeleteModal;
