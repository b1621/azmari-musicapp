import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const Layout = () => {
  const Box = styled.div`
    display: flex;
  `;
  const SidebarBox = styled.div`
    width: 20%;
    height: 100vh;
    background-color: #272d46;
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
  const Logo = styled.h3`
    border: 1px solid breen;
  `;
  const Div1 = styled.div`
    border: 1px solid black;
  `;
  return (
    <Box>
      <SidebarBox>
        <Div1>
          <Logo>Azmari</Logo>
        </Div1>
        {/* <Button>Hello world</Button> */}
      </SidebarBox>
      <div>
        <Outlet />
      </div>
    </Box>
  );
};

export default Layout;
