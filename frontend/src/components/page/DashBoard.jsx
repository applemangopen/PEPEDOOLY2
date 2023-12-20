import React, { useState } from "react";
import SideBar from "../organisms/dashboard/SideBar";
import MainContainer from "../organisms/dashboard/MainContainer";
import styled from "styled-components";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const PageContainer = styled.div`
  display: flex;
`;

const DashBoard = () => {
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

export default DashBoard;
