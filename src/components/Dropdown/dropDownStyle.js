import styled from "styled-components";

export const DropdownWrap = styled.div`
  position: relative;
  margin-left: 20px;
  z-index: 999;
`;

export const DropdownBtn = styled.div`
  padding: 1px 5px;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background-color: #487eb0;
  display: flex;
  align-items: center;
`;

export const ImgArrow = styled.img`
  width: 25px;
  margin-left: 30px;
  transition: all 0.1s linear;
  transform: ${({ isActive }) =>
    isActive ? "rotate(180deg)" : "rotate(0deg)"};
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 110%;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
`;

export const DropdownItem = styled.div`
  padding: 5px 15px;

  :hover {
    cursor: pointer;
    background-color: #eee;
  }
`;
