import React, { ReactNode } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import styled from "@emotion/styled";

interface TableLayoutProps {
  children: ReactNode;
  headerList: string[];
}

const OverflowHiddenDiv = styled.div`
  overflow: hidden;
`;

// background-color: white;
const Table = styled.table`
  width: 100%;
  border: 1px solid green;
  text-align: left;
  font-size: 0.875rem; /* equivalent to text-sm */
  font-weight: 300; /* equivalent to font-light */
`;

const TableHead = styled.thead`
  border-bottom: 1px solid slategray; /* equivalent to border-b border-slate-300 */
`;

// const TableRow = styled.tr`
//  &:hover {
//     background-color: #f7fafc; /* equivalent to hover:bg-slate-100 */
//   }
// `;

const TableHeader = styled.th`
  padding: 1.5rem 1rem; /* equivalent to px-6 py-4 */
`;

// const TableData = styled.td`
//   padding: 1.5rem 1rem; /* equivalent to px-6 py-4 */
// `;

const TableSpan = styled.span`
display: "flex",
alignItems: "center",
gap: "0.25rem",
fontWeight: "600", // equivalent to font-semibold
color: "slategray", // equivalent to text-slate-700
`;

const TableLayout: React.FC<TableLayoutProps> = ({ children, headerList }) => {
  return (
    <OverflowHiddenDiv>
      <Table>
        <TableHead>
          {/* <TableRow> */}
          {headerList.map((element, index) => (
            <TableHeader key={index}>
              <TableSpan>
                {element}
                {/* <IoIosArrowRoundDown size={20} /> */}
              </TableSpan>
            </TableHeader>
          ))}
          {/* </TableRow> */}
        </TableHead>
        <tbody>{children}</tbody>
      </Table>
    </OverflowHiddenDiv>
  );
};

export default TableLayout;
