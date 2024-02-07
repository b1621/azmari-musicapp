import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { RxDashboard } from "react-icons/rx";
import { BiAlbum } from "react-icons/bi";
import { BsMusicNoteList } from "react-icons/bs";
import { BsFileMusic } from "react-icons/bs";

interface SidebarProps {
  isOpen: boolean;
}
interface SidebarLinkProps {
  currentPath: string;
  linkPath: string;
}

const Box = styled.div`
  display: flex;
`;
const SidebarBox = styled.div<SidebarProps>`
  width: ${({ isOpen }) => (isOpen ? "18vw" : "0px")};
  height: 100vh;
  background-color: #272d46;
`;
const Logo = styled.h2`
  text-align: center;
  color: white;
  margin: 20px 0;
`;
const LogoImage = styled.img`
  width: 25px;
  margin-right: 2px;
`;
const Div1 = styled.div`
  margin: 30px 0;
`;
const Div2 = styled.div`
  padding: 10px 0;
`;
const Content = styled.div`
  width: 80vw;
`;

const SidebarLink = styled(Link)<SidebarLinkProps>`
  display: flex;
  align-items: center;
  color: white;
  width: 100px;
  margin: 0 auto;
  text-decoration: none;
  padding: 10px 20px;
  background-color: ${({ currentPath, linkPath }) =>
    currentPath == linkPath ? "#394262" : ""};
  color: ${({ currentPath, linkPath }) =>
    currentPath == linkPath ? "#fb8b24" : ""};
  margin-bottom: 15px;
  & > *:first-child {
    margin-right: 0.5rem; /* Adjust space between icon and text */
  }
  &:hover {
    background-color: #394262;
    border-radius: 5px;
    color: #fb8b24;
    // border-left: 3px solid hotpink;
  }
`;

const Layout = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log("path = ", currentPath);

  return (
    <Box>
      <SidebarBox isOpen={isOpen}>
        <Div1>
          <Logo>
            {" "}
            <LogoImage src="/headphones.png" alt="" /> Azmari
          </Logo>
        </Div1>
        <Div2>
          <SidebarLink currentPath={currentPath} linkPath={"/"} to="/">
            <RxDashboard /> Dashboard
          </SidebarLink>
          <SidebarLink
            currentPath={currentPath}
            linkPath={"/album"}
            to="/album"
          >
            <BiAlbum /> Album
          </SidebarLink>
          <SidebarLink
            currentPath={currentPath}
            linkPath={"/artist"}
            to="/artist"
          >
            <BsMusicNoteList /> Artist
          </SidebarLink>
          <SidebarLink currentPath={currentPath} linkPath={"/song"} to="/song">
            <BsFileMusic /> Song
          </SidebarLink>
        </Div2>
        {/* Other sidebar links can be added here */}
      </SidebarBox>
      <Content>
        <Outlet />
      </Content>
    </Box>
  );
};

export default Layout;
