import { ReactNode } from "react";
import styled from "@emotion/styled";

interface TableRowProps {
  children: ReactNode;
}

const StyledTr = styled.tr`
  padding: 5px 0;
  border: 1px solid red;
`;

const TableRow = ({ children }: TableRowProps) => {
  return <StyledTr>{children}</StyledTr>;
};

export default TableRow;
