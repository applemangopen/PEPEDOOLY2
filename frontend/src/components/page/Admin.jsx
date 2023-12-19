import React, { useState } from "react";
import SideBar from "../organisms/admin/SideBar";
import MainContainer from "../organisms/admin/MainContainer";
import styled from "styled-components";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const PageContainer = styled.div`
  display: flex;
`;

const Admin = () => {
  const [menu, setMenu] = useState("info");

  return (
    <>
      <Header />
      <PageContainer>
        <SideBar setMenu={setMenu} />
        <MainContainer menu={menu} />
      </PageContainer>
      <Footer />
    </>
  );
};

export default Admin;
