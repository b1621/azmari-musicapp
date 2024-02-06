import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

interface SidebarProps {
  isOpen: boolean;
}

const Box = styled.div`
  display: flex;
`;
const SidebarBox = styled.div<SidebarProps>`
  width: ${({ isOpen }) => (isOpen ? "20%" : "0px")};
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
const Logo = styled.h2`
  border: 1px solid green;
`;
const Div1 = styled.div`
  border: 1px solid black;
`;
const Layout = ({ isOpen }: SidebarProps) => {
  return (
    <Box>
      <SidebarBox isOpen={isOpen}>
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
