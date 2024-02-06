import { Link, Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { RxDashboard } from "react-icons/rx";
import { BiAlbum } from "react-icons/bi";
import { BsMusicNoteList } from "react-icons/bs";
import { BsFileMusic } from "react-icons/bs";

interface SidebarProps {
  isOpen: boolean;
}

const Box = styled.div`
  display: flex;
`;
const SidebarBox = styled.div<SidebarProps>`
  width: ${({ isOpen }) => (isOpen ? "16%" : "0px")};
  height: 100vh;
  background-color: #272d46;
`;
const Logo = styled.h2`
  text-align: center;
  color: white;
  margin: 20px 0;
`;
const Div1 = styled.div`
  margin: 30px 0;
`;
const Div2 = styled.div`
  padding: 10px 0;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  width: 100px;
  margin: 0 auto;
  text-decoration: none;
  padding: 10px 20px;
  margin-bottom: 15px;
  & > *:first-child {
    margin-right: 0.5rem; /* Adjust space between icon and text */
  }
  &:hover {
    background-color: #394262;
    color: #fb8b24;
    // border-left: 3px solid hotpink;
  }
`;

const Layout = ({ isOpen }: SidebarProps) => {
  return (
    <Box>
      <SidebarBox isOpen={isOpen}>
        <Div1>
          <Logo>Azmari</Logo>
        </Div1>
        <Div2>
          <SidebarLink to="/">
            <RxDashboard /> Dashboard
          </SidebarLink>
          <SidebarLink to="/album">
            <BiAlbum /> Album
          </SidebarLink>
          <SidebarLink to="/artist">
            <BsMusicNoteList /> Artist
          </SidebarLink>
          <SidebarLink to="/song">
            <BsFileMusic /> Song
          </SidebarLink>
        </Div2>
        {/* Other sidebar links can be added here */}
      </SidebarBox>
      <div>
        <Outlet />
      </div>
    </Box>
  );
};

export default Layout;
