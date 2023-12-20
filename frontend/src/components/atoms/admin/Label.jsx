import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  width: 400px;
  height: 50px;
  margin: 0 auto 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};
