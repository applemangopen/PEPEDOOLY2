import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import BodyContainer from "./BodyContainer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 64vh;
`;
const StyledFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
const MainContainer = ({ menu }) => {
  return (
    <Container>
      <BodyContainer menu={menu} />
    </Container>
  );
};
export default MainContainer;
