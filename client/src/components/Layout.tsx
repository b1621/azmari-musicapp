import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const Layout = () => {
  const Box = styled.div`
    border: 1px solid black;
  `;
  const Button = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;
  return (
    <div>
      <Box>
        <Button>Hello world</Button>
      </Box>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
