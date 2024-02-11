import React, { ReactNode } from "react";

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
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem; /* equivalent to text-sm */
  font-weight: 300; /* equivalent to font-light */
`;

const TableHead = styled.thead`
  border-bottom: 1px solid slategray; /* equivalent to border-b border-slate-300 */
`;

const TableHeader = styled.th`
  padding: 15px 10px; /* equivalent to px-6 py-4 */
  color: white;
`;

const TableSpan = styled.span`
alignItems: "center",
display: "flex",
justify-content:space-between;
gap: "0.25rem",
fontWeight: "600", 
color: "slategray",
`;

const TableBody = styled.tbody`
  color: #f2f2f2;
`;

const TableLayout: React.FC<TableLayoutProps> = ({ children, headerList }) => {
  return (
    <OverflowHiddenDiv>
      <Table>
        <TableHead>
          <tr>
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
          </tr>
        </TableHead>

        <TableBody>{children}</TableBody>
      </Table>
    </OverflowHiddenDiv>
  );
};

export default TableLayout;
