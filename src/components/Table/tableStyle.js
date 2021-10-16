import styled from "styled-components";
import { ReactComponent as deleteicon } from "../../assets/icons/delete-icon.svg";

export const Container = styled.div`
  display: flex;
  margin: 50px 100px;

  @media screen and (max-width: 1020px) {
    margin: 20px 10px;
  }

  @media screen and (max-width: 600px) {
    margin: 20px;
  }
`;

export const Table = styled.table`
  width: 100%;
`;

Table.Header = styled.thead``;
Table.Body = styled.tbody``;
Table.TR = styled.tr`
  border: var(--tborder);
  transition: box-shadow 0.15s linear;
  background-color: #fff;

  :nth-child(odd) {
    background-color: #f9f9f9;
  }

  :hover {
    transform: ${({ ts }) => !ts && "scaleY(1.05)"};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 3px;
  border-style: 2px solid #00a8ff;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 230px;
  padding: 2px;
  background-color: transparent;
  border: ${({ edit }) => (edit ? "2px solid #487eb0" : "none")};
  border-radius: 5px;
  outline: none;
`;

Table.TH = styled.th`
  padding: 10px 0 10px 17px;
  text-align: left;
  color: #00a8ff;
  background-color: #fff;
  white-space: nowrap;
  display: ${({ df }) => df && "flex"};
  align-items: ${({ df }) => df && "center"};

  span {
    color: #fff;
    cursor: pointer;
    margin-left: 50px;
    padding: 5px 15px;
    border-radius: 5px;
    background-color: #487eb0;
  }

  @media screen and (max-width: 600px) {
    padding-right: 17px;
  }
`;
Table.TD = styled.td`
  padding: 10px 10px 10px 17px;
  display: ${({ inp }) => inp && "flex"};
  align-items: ${({ inp }) => inp && "center"};
  justify-content: ${({ inp }) => inp && "space-between"};

  img {
    cursor: pointer;
    margin-left: 5px;
  }

  @media screen and (max-width: 600px) {
    padding-right: 17px;
  }
`;

export const IconDelete = styled(deleteicon)`
  margin-left: 30px;
  cursor: pointer;
`;
