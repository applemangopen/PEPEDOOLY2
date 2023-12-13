import React from "react";
import MenuTabs from "../../organisms/admin/MenuTabs";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;

  padding: 20px 300px;
  margin: 20px;
  justify-content: space-between;
`;

const CombinedComponent = () => {
  return (
    <Container>
      <MenuTabs />
    </Container>
  );
};

export default CombinedComponent;
