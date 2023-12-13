import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import AdminTemplate from "../template/admin/AdminTemplate";
import styled from "styled-components";

const PageContainer = styled.div`
  height: 100vh;
`;

const Admin = () => {
  return (
    <PageContainer>
      {/*      <Header></Header> */}
      <AdminTemplate />
      {/*       <Footer></Footer>
       */}{" "}
    </PageContainer>
  );
};

export default Admin;
