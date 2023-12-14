import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};
