import styled from "styled-components";

const StyledInput = styled.input`
  width: 50%;
  height: 40px;
  margin: 0 auto 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  box-sizing: border-box;
  text-align: center;
`;

export const Input = ({ onChange, value }) => {
  return <StyledInput onChange={onChange} value={value} />;
};
