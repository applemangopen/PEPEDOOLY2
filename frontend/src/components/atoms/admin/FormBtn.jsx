import React from "react";
import styled from "styled-components";

const FormButton = styled.button`
  position: static;
  right: 50px;
  bottom: 30%;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid rgb(61, 61, 61);
  border-radius: 5px;
  cursor: pointer;
  background: ${({ background }) => background || "transparent"};
  color: ${({ color }) => color || "black"}; // 추가
`;
export const FormBtn = ({ onClick, children, background, color }) => {
  // color 추가
  return (
    <FormButton onClick={onClick} background={background} color={color}>
      {children}
    </FormButton>
  );
};
