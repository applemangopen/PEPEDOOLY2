import React from "react";
import SideBar from "../organisms/admin/SideBar";
import MainContainer from "../organisms/admin/MainContainer";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 여백의 높이);
  overflow: auto;
`;

const Admin = () => {
  return (
    <>
      <PageContainer>
        <SideBar />
        <MainContainer />
      </PageContainer>
    </>
  );
};

export default Admin;
