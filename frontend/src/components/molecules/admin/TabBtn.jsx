import React from "react";
import { MenuBtn } from "../../atoms/admin/MenuBtn";

const TabBtn = ({ setMenu }) => {
  return (
    <>
      <MenuBtn onClick={() => setMenu("info")}>info</MenuBtn>
      <MenuBtn onClick={() => setMenu("notice")}>notice</MenuBtn>
      <MenuBtn onClick={() => setMenu("manage")}>manage</MenuBtn>
    </>
  );
};

export default TabBtn;
