import styled from "styled-components";

interface TRProps {
  selected?: boolean;
}

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: #1e5168;
  tbody {
    display: block;

    @media (min-width: 1400px) {
      max-height: 60vh;
    }

    @media (min-width: 1px) and (max-width: 1399px) {
      max-height: 55vh;
    }

    overflow-y: scroll;
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
`;

export const Thead = styled.thead`
  background-color: #1e5168;
  color: white;
`;

export const Tbody = styled.tbody`
  display: table;
  overflow: auto;
  width: 100%;
`;

export const TR = styled.tr<TRProps>`
  height: 60px;
  border-bottom: 1px solid #f1f4f9;
  background-color: ${props => (props.selected ? "#FFFAF7" : null)};
  box-shadow: ${props =>
    props.selected ? "0px 2px 5px -2px rgba(143,140,143,1)" : null};
`;

export const TH = styled.th`
  text-align: center;
  width: 33%;
`;

export const TD = styled.td`
  text-align: center;
`;
