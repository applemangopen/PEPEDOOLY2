import React, { useState } from "react";
import SideBar from "../organisms/admin/SideBar";
import MainContainer from "../organisms/admin/MainContainer";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
`;

const Admin = () => {
  const [menu, setMenu] = useState("info");

  return (
    <>
      <PageContainer>
        <SideBar setMenu={setMenu} />
        <MainContainer menu={menu} />
      </PageContainer>
    </>
  );
};

export default Admin;
