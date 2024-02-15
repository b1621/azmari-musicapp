import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { RxDashboard } from "react-icons/rx";
import { BiAlbum } from "react-icons/bi";
import { BsList, BsMusicNoteList } from "react-icons/bs";
import { BsFileMusic } from "react-icons/bs";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
}
interface SidebarLinkProps {
  currentpath: string;
  linkpath: string;
}

const Box = styled.div`
  display: flex;
`;
const SidebarBox = styled.div<SidebarProps>`
  width: 15vw;
  min-height: 100vh;
  background-color: #272d46;

  /* Add media query for smaller screens */
  @media screen and (max-width: 768px) {
    z-index: 11;
    position: ${({ isOpen }) => (isOpen ? "absolute" : "none")};
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    width: ${({ isOpen }) => (isOpen ? "80%" : "0px")};
  }
`;
const Logo = styled.h2`
  text-align: center;
  color: white;
  margin: 10px 0;
`;
const LogoImage = styled.img`
  width: 25px;
  margin-right: 2px;
`;
const Div1 = styled.div`
  margin-bottom: 30px;
`;
const Div2 = styled.div`
  padding: 10px 0;
`;
const Div3 = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: end;
  padding: 0 20px;
`;
const Content = styled.div`
  width: 82vw;
`;

const SidebarLink = styled(Link)<SidebarLinkProps>`
  display: flex;
  align-items: center;
  color: white;
  width: 100px;
  margin: 0 auto;
  text-decoration: none;
  padding: 10px 20px;
  background-color: ${({ currentpath, linkpath }) =>
    currentpath == linkpath ? "#394262" : ""};
  color: ${({ currentpath, linkpath }) =>
    currentpath == linkpath ? "#fb8b24" : ""};
  margin-bottom: 15px;
  & > *:first-of-type {
    margin-right: 0.5rem; /* Adjust space between icon and text */
  }
  &:hover {
    background-color: #394262;
    border-radius: 5px;
    color: #fb8b24;
  }
`;

const MenuButton = styled.button<SidebarProps>`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: none; /* Hide by default */
  margin: 20px;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    right: 0px;
    position: fixed;
    z-index: 11;
  }
`;
const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: none; /* Hide by default */

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Layout = () => {
  const location = useLocation();
  const currentpath = location?.pathname || "/";

  console.log("path = ", currentpath);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <MenuButton
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(true);
          console.log("open sidebar");
        }}
      >
        <BsList size={30} />
      </MenuButton>
      <SidebarBox isOpen={isOpen}>
        <Div3>
          <CloseButton onClick={() => setIsOpen(false)}>
            <IoCloseOutline size={22} />
          </CloseButton>
        </Div3>
        <Div1>
          <Logo>
            {" "}
            <LogoImage src="/headphones.png" alt="" /> Azmari
          </Logo>
        </Div1>
        <Div2>
          <SidebarLink currentpath={currentpath} linkpath={"/"} to="/">
            <RxDashboard /> Dashboard
          </SidebarLink>
          <SidebarLink currentpath={currentpath} linkpath={"/song"} to="/song">
            <BsFileMusic /> Song
          </SidebarLink>
          <SidebarLink
            currentpath={currentpath}
            linkpath={"/artist"}
            to="/artist"
          >
            <BsMusicNoteList /> Artist
          </SidebarLink>
          <SidebarLink
            currentpath={currentpath}
            linkpath={"/album"}
            to="/album"
          >
            <BiAlbum /> Album
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
