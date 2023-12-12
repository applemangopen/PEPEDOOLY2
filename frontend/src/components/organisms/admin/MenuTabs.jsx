import React, { useState } from "react";
import TabBtn from "../../molecules/admin/TabBtn";
import UserInfo from "./UserInfo";
import { Notice } from "../../molecules/admin/Notice";
import { Manage } from "../../molecules/admin/Manage";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  display: flex;
  border: 3px solid black;
  padding: 20px;
  height: 400px;
  margin: 20px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border-right: 2px solid black;
  padding-right: 20px;
`;

const UserInfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const MenuTabs = () => {
  const [menu, setMenu] = useState("info");

  return (
    <MainContainer>
      <MenuContainer>
        <TabBtn setMenu={setMenu} activeMenu={menu} />
      </MenuContainer>
      <UserInfoContainer>
        {menu === "info" && <UserInfo />}
        {menu === "notice" && <Notice />}
        {menu === "manage" && <Manage />}
      </UserInfoContainer>
    </MainContainer>
  );
};

export default MenuTabs;
