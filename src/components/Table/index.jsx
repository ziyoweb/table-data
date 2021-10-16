import React, { useState } from "react";
import TableRow from "../TableRow";
import Dropdown from "../Dropdown";
import { tableData } from "../../mock/tableData";
import { Container, Table, Checkbox } from "./tableStyle";

const selectedItem = ["All", ...new Set(tableData.map((item) => item.status))];

const Index = () => {
  const [data, setData] = useState(tableData);
  const [sortDown, setSortDown] = useState(false);
  const [selected, setSelected] = useState(selectedItem);

  const onNameSort = () => {
    setSortDown(!sortDown);
    const newData = data.sort((a, b) =>
      a.fullName > b.fullName ? 1 : b.fullName > a.fullName ? -1 : 0
    );
    setData(newData);
  };

  const onYearSort = () => {
    setSortDown(!sortDown);
    const newData = data.sort((a, b) => a.year - b.year);
    setData(newData);
  };

  const onDelete = (id) => {
    const newData = data.filter((value) => value.id !== id);
    setData(newData);
  };

  const filterSelected = (status) => {
    if (status === "All") {
      setData(tableData);
      return;
    }
    const newData = tableData.filter((value) => value.status === status);
    setData(newData);
  };

  const onSaveEmail = (id, email) => {
    const newData = data.map((value) => {
      value.email = value.id === id ? email : value.email;
      return {
        ...value,
        email: value.email,
      };
    });
    setData(newData);
  };

  return (
    <Container>
      <Table>
        <Table.Header>
          <Table.TR ts>
            <Table.TH>
              <Checkbox type="checkbox" />
            </Table.TH>
            <Table.TH>
              Full Name <span onClick={onNameSort}>Sort</span>
            </Table.TH>
            <Table.TH>Email</Table.TH>
            <Table.TH>
              Year of birth <span onClick={onYearSort}>Sort</span>
            </Table.TH>
            <Table.TH df>
              Status
              <Dropdown selected={selected} filterSelected={filterSelected} />
            </Table.TH>
            <Table.TH>Action</Table.TH>
          </Table.TR>
        </Table.Header>
        <Table.Body>
          {data.map((value) => (
            <TableRow
              key={value.id}
              value={value}
              onDelete={onDelete}
              onSaveEmail={onSaveEmail}
            />
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default Index;
