import styled from "@emotion/styled";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

const ButtonStyled = styled.button`
  border: none;
  background-color: #cd703b;
  padding: 7px 16px;
  border-radius: 7px;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: #d27e4e; /* equivalent to hover:bg-slate-100 */
  }
`;

const Button = ({ children, handleClick }: ButtonProps) => {
  return <ButtonStyled onClick={handleClick}>{children}</ButtonStyled>;
};

export default Button;
