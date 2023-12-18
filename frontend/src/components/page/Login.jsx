import styled from "styled-components";
import Button from "../atoms/login/Button";
import Icon from "../atoms/login/Icon";
import Input from "../atoms/login/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
// import { SiWebtrees } from "react-icons/si";
// import { Web3Auth } from "@web3auth/modal";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
//FaInstagram
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const movePage = useNavigate();

  function handleEmailChange(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  function goRegister() {
    movePage("/register");
  }

  function loginUser(email, password) {
    const loginData = {
      email: email,
      password: password,
    };
    console.log(loginData);

    axios
      .post("http://localhost:4000/users/login", loginData, {
        withCredentials: "include",
      })
      .then((response) => {
        // 로그인 성공 시 처리
        console.log("로그인 성공", response);
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error("로그인 실패", error);
      });
  }

  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const FaGithubBackground = "#000000";
  // "linear-gradient(to right, #000000 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <>
      <Header />
      <MainContainer
        onSubmit={(e) => {
          e.preventDefault();
          const { email: userEmail, password: userPassword } = e.target;
          loginUser(userEmail.value, userPassword.value);
        }}
      >
        <WelcomeText>
          <img src="./" alt="" />
          PepeDooly
        </WelcomeText>
        <InputContainer>
          <Input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </InputContainer>
        <ButtonContainer>
          <Button content="Login" />
        </ButtonContainer>
        <LoginWith>OR LOGIN WITH</LoginWith>
        <HorizontalRule />
        <IconsContainer>
          <Icon color={FacebookBackground}>
            <FaFacebookF />
          </Icon>
          <Icon color={FaGithubBackground}>
            <FaGithub />
          </Icon>
          <Icon color={TwitterBackground}>
            <FaTwitter />
          </Icon>
          {/* <Icon color={TwitterBackground}>
          <SiWebtrees onClick={() => web3auth.connect()} />
        </Icon> */}
        </IconsContainer>
        <ForgotPassword onClick={goRegister}>Join PepeDooly</ForgotPassword>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  height: 80vh;
  width: 30vw;
  background: #71be71;
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  /* backdrop-filter: blur(8.5px); */
  /* -webkit-backdrop-filter: blur(8.5px); */
  border-radius: 10px;
  color: #000504;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  color: green;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default App;
