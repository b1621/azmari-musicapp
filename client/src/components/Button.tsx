import styled from "@emotion/styled";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
}

const ButtonStyled = styled.button`
  border: none;
  background-color: #cd703b;
  padding: 10px 16px;
  border-radius: 7px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    background-color: #d27e4e; /* equivalent to hover:bg-slate-100 */
  }
`;

const Button = ({ children }: ButtonProps) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
