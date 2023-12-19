import React from "react";
import styled from "styled-components";

const FormButton = styled.button`
  position: fixed; // 변경된 부분
  right: 50px;
  bottom: 30%;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  cursor: pointer;
`;
export const FormBtn = ({ onClick, children }) => {
  return <FormButton onClick={onClick}>{children}</FormButton>;
};
