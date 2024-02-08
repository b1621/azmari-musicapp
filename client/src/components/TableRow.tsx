import { ReactNode } from "react";
import styled from "@emotion/styled";

interface TableRowProps {
  children: ReactNode;
}

const StyledTr = styled.tr`
  padding: 5px 0;

  &:hover {
    background-color: #272d46; /* equivalent to hover:bg-slate-100 */
  }
`;

const TableRow = ({ children }: TableRowProps) => {
  return <StyledTr>{children}</StyledTr>;
};

export default TableRow;
