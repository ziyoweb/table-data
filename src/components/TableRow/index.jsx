import React, { useState } from "react";
import { Table, IconDelete, Checkbox, Input } from "../Table/tableStyle";
import pencil from "../../assets/images/pencil.png";
import close from "../../assets/images/close.png";
import checkmark from "../../assets/images/checkmark.png";

const TableRow = ({ value, onDelete, onSaveEmail }) => {
  const [edit, setEdit] = useState(false);
  const [change, setChange] = useState(value.email);

  const onSave = () => {
    onSaveEmail(value.id, change);
    setEdit(!edit);
  };
  const onDeleteChange = () => {
    setEdit(!edit);
    setChange(value.email);
  };
  const newEmail = (e) => {
    if (edit) {
      setChange(e.target.value);
    }
  };

  return (
    <Table.TR>
      <Table.TD className="mx-auto">
        <Checkbox type="checkbox" />
      </Table.TD>
      <Table.TD>{value.fullName}</Table.TD>
      <Table.TD inp>
        <Input type="text" value={change} onChange={newEmail} edit={edit} />
        {edit ? (
          <span>
            <img src={checkmark} alt="" width="20" onClick={onSave} />
            <img src={close} alt="" width="20" onClick={onDeleteChange} />
          </span>
        ) : (
          <img src={pencil} alt="" width="20" onClick={() => setEdit(!edit)} />
        )}
      </Table.TD>
      <Table.TD>{value.year}</Table.TD>
      <Table.TD>{value.status}</Table.TD>
      <Table.TD onClick={() => onDelete(value.id)}>
        <IconDelete />
      </Table.TD>
    </Table.TR>
  );
};

export default TableRow;
