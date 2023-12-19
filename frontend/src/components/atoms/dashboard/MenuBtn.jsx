import React from "react";
import styled from "styled-components";

const MenuButton = styled.button`
  display: block;
  width: 90%;
  height: 100px;
  border: 1px solid #000;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const MenuBtn = ({ onClick, children }) => {
  return <MenuButton onClick={onClick}>{children}</MenuButton>;
};
