import React from "react";
import styled from "styled-components";

const FormButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
`;
export const FormBtn = ({ onClick, children }) => {
  return <FormButton onClick={onClick}>{children}</FormButton>;
};
