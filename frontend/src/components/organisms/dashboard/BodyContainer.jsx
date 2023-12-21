import React from "react";
import Info from "../../molecules/dashboard/Info";
import { Notice } from "../../molecules/dashboard/Notice";
import { Manage } from "../../molecules/dashboard/Manage";
import { MyInfo } from "../../molecules/dashboard/MyInfo";
import { MyBoards } from "../../molecules/dashboard/MyBoards";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100vh;
  padding: 20px;
`;

const BodyContainer = ({ menu }) => {
  return (
    <>
      <Container>
        {menu === "myInfo" && <MyInfo />}
        {menu === "myBoards" && <MyBoards />}
        {menu === "myComments" && <MyBoards />}
        {menu === "delete" && <MyBoards />}
      </Container>
    </>
  );
};
export default BodyContainer;
