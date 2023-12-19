import React, { useState, useEffect } from "react";
import Info from "../../molecules/admin/Info";
import { Notice } from "../../molecules/admin/Notice";
import { Manage } from "../../molecules/admin/Manage";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  position: relative;
  height: 100vh;
  padding: 20px;
`;

const BodyContainer = ({ menu }) => {
  const [adminData, setAdminData] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAdminData(response.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  }, [token]);

  return (
    <Container>
      {menu === "info" && adminData ? <Info data={adminData} /> : null}
      {menu === "notice" && <Notice />}
      {menu === "manage" && <Manage />}
    </Container>
  );
};

export default BodyContainer;
