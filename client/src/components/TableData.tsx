import styled from "@emotion/styled";
import { ReactNode } from "react";
interface TableDataProps {
  children: ReactNode;
}

const Td = styled.td`
  padding: 15px 10px;
`;
const TableData = ({ children }: TableDataProps) => {
  return <Td>{children}</Td>;
};

export default TableData;
