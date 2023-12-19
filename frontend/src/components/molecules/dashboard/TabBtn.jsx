import React from "react";
import { MenuBtn } from "../../atoms/dashboard/MenuBtn";

const TabBtn = ({ setMenu }) => {
  return (
    <>
      <MenuBtn onClick={() => setMenu("myInfo")}>내정보</MenuBtn>
      <MenuBtn onClick={() => setMenu("myBoards")}>내가 작성한 글</MenuBtn>
      <MenuBtn onClick={() => setMenu("myComments")}>내가 댓글</MenuBtn>
    </>
  );
};

export default TabBtn;
