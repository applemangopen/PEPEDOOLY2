import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import BodyContainer from "./BodyContainer";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const MainTemplate = () => {
  return (
    <MainContainer>
      <Header />
      <BodyContainer />
      <Footer />
    </MainContainer>
  );
};
export default MainTemplate;
