// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@rebass/emotion";
import { css } from "@emotion/react";

export const sidebarStyle = css`
  width: 250px;
  height: 100vh;
  background-color: #f8f9fa;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const navItemStyle = css`
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Layout = () => {
  return (
    <div>
      <Box css={sidebarStyle}>
        <nav>
          <a href="#" css={navItemStyle}>
            Home
          </a>
          <a href="#" css={navItemStyle}>
            About
          </a>
          <a href="#" css={navItemStyle}>
            Services
          </a>
          <a href="#" css={navItemStyle}>
            Contact
          </a>
        </nav>
        <footer>
          <small>&copy; 2023 Your Company</small>
        </footer>
      </Box>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
