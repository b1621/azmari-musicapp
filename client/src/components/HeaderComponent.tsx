import { ReactNode } from "react";
import styled from "@emotion/styled";

interface HeaderProps {
  children: ReactNode;
}

const HeaderBox = styled.div`
  height: 36vh;
  border: 1px solid #1d2339;

  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  background-image: url(${"austin-neill-hgO1wFPXl3I-unsplash.jpg"});
  background-size: cover; /* Adjusts the size of the background image to cover the entire div */
  background-position: center; /* Centers the background image within the div */
`;
const HeaderComponent = ({ children }: HeaderProps) => {
  return <HeaderBox>{children}</HeaderBox>;
};

export default HeaderComponent;
