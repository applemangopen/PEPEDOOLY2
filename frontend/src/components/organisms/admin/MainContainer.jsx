import BodyContainer from "./BodyContainer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  height: 64vh;
`;

const MainContainer = ({ menu }) => {
  return (
    <Container>
      <BodyContainer menu={menu} />
    </Container>
  );
};
export default MainContainer;
