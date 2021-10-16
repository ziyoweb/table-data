import React, { useState } from "react";
import {
  DropdownWrap,
  DropdownBtn,
  DropdownContent,
  DropdownItem,
  ImgArrow,
} from "./dropDownStyle";
import arrowIcon from "../../assets/images/arrow-bottom.png";

const Dropdown = ({ selected, filterSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState(selected[0]);

  const selectFunc = (value) => {
    setSelect(value);
  };

  return (
    <DropdownWrap>
      <DropdownBtn onClick={() => setIsActive(!isActive)}>
        {select} <ImgArrow src={arrowIcon} alt=">" isActive={isActive} />
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          {selected.map((value, index) => (
            <DropdownItem
              key={index}
              onClick={() => {
                {
                  filterSelected(value);
                  setIsActive(!isActive);
                  selectFunc(value);
                }
              }}
            >
              {value}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownWrap>
  );
};

export default Dropdown;
