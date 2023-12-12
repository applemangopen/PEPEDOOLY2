import React from "react";
import styled from "styled-components";

const FormButton = styled.button`
  position: absolute; // 부모 컨테이너에 대해 절대 위치
  right: 20px; // 우측 하단에 위치하기 위해 오른쪽으로부터 20px
  bottom: 20px; // 하단에 위치하기 위해 아래로부터 20px
  padding: 10px 20px; // 버튼 내부 패딩
  font-size: 16px; // 글씨 크기
  border: 1px solid #000; // 테두리 스타일
  border-radius: 5px; // 모서리 둥글게
  cursor: pointer; // 마우스 오버 시 커서 변경
`;

export const FormBtn = ({ onClick, children }) => {
  return <FormButton onClick={onClick}>{children}</FormButton>;
};
