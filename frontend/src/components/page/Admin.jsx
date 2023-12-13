import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import MenuTabs from "../organisms/admin/MenuTabs";
import styled from "styled-components";

const PageContainer = styled.div`
  height: 100vh;
`;

const Admin = () => {
  return (
    <PageContainer>
      <Header></Header>
      <MenuTabs />
    </PageContainer>
  );
};

export default Admin;
