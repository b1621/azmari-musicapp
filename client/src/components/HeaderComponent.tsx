import { ReactNode } from "react";
import styled from "@emotion/styled";

interface HeaderProps {
  children: ReactNode;
  backgroundImage: string;
}

const HeaderBox = styled.div`
  position: relative;
  height: 36vh;
  border: 1px solid #1d2339;
  width: 100%;
  background-color: #272d46;
  overflow: hidden; /* Ensure the pseudo-element stays within the parent */
`;
// background-color: rgba(0, 0, 0, 0.3);

// background-image: url(${"austin-neill-hgO1wFPXl3I-unsplash.jpg"});
// background-image: url(${({ backgroundImage }) => backgroundImage});
const BackgroundImage = styled.div<{ backgroundImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  filter: brightness(0.4); /* Adjust the brightness value as needed */
`;

const Content = styled.div`
  position: relative;
  z-index: 1; /* Ensure the text is above the background image */
`;

const HeaderComponent = ({ children, backgroundImage }: HeaderProps) => {
  return (
    <HeaderBox>
      <BackgroundImage backgroundImage={backgroundImage} />
      <Content>{children}</Content>
    </HeaderBox>
  );
};

export default HeaderComponent;
