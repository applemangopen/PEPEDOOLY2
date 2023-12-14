import React, { useState } from "react";
import TabBtn from "../../molecules/admin/TabBtn";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 3px solid black;
  padding: 20px;
  /* margin: 20px; */
  height: 100vh;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border-right: 2px solid black;
  padding-right: 20px;
`;

const MainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const SideBar = () => {
  const [menu, setMenu] = useState("info");

  return (
    <Container>
      <MenuContainer>
        <TabBtn setMenu={setMenu} activeMenu={menu} />
      </MenuContainer>
      <MainContainer>
        {/* {menu === "info" && <UserInfo />}
        {menu === "notice" && <Notice />}
        {menu === "manage" && <Manage />} */}
      </MainContainer>
    </Container>
  );
};

export default SideBar;
