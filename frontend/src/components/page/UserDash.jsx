import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useUserState } from "../../hooks/useUserState";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.greenMode ? "#3CB371" : "#FFD700")};
    color: ${(props) => (props.greenMode ? "#fff" : "#333")};
    transition: background-color 0.3s, color 0.3s;
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: ${(props) => (props.greenMode ? "#228B22" : "#FFA500")};
  color: ${(props) => (props.greenMode ? "#fff" : "#333")};
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainContent = styled.div`
  margin-left: 250px;
  padding: 20px;
`;

const SidebarButton = styled.button`
  display: block;
  margin-bottom: 10px;
  padding: 12px 24px;
  border: none;
  background-color: ${(props) => (props.greenMode ? "#32CD32" : "#FF8C00")};
  color: ${(props) => (props.greenMode ? "#fff" : "#333")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-size: 18px;

  &:hover {
    background-color: ${(props) => (props.greenMode ? "#3CB371" : "#FFA500")};
    color: ${(props) => (props.greenMode ? "#fff" : "#333")};
  }
`;

const UserInfoBox = styled.div`
  background-color: ${(props) => (props.greenMode ? "#32CD32" : "#FF8C00")};
  color: ${(props) => (props.greenMode ? "#fff" : "#333")};
  padding: 20px;
  margin-top: 20px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const SidebarBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserDash = () => {
  const { user } = useUserState();
  //   console.log("대시보드 유저:", user);
  const [greenMode, setGreenMode] = useState(true);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const navigate = useNavigate(); // React Router의 useNavigate 훅을 사용하여 페이지 이동 기능을 가져옴

  useEffect(() => {
    console.log("대시보드유저:", user);
  }, [user]);
  const toggleColorMode = () => {
    setGreenMode(!greenMode);
  };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  const goToHome = () => {
    navigate("/"); // "/" 경로로 이동
  };

  return (
    <>
      <GlobalStyle greenMode={greenMode} />
      <Sidebar greenMode={greenMode}>
        <div>
          <h2>Sidebar</h2>
          <button onClick={toggleColorMode}>
            {greenMode ? "옐로우 모드로 전환" : "그린 모드로 전환"}
          </button>
          <SidebarButton greenMode={greenMode} onClick={toggleUserInfo}>
            유저 정보
          </SidebarButton>
          <SidebarButton greenMode={greenMode}>내가 쓴 글</SidebarButton>
          <SidebarButton greenMode={greenMode}>내가 쓴 댓글</SidebarButton>
          <SidebarButton greenMode={greenMode}>회원 탈퇴</SidebarButton>
        </div>
        <SidebarBottom>
          <div>
            <button onClick={goToHome}>홈으로 돌아가기</button>
          </div>
        </SidebarBottom>
      </Sidebar>
      <MainContent>
        <h1>Pepedooly</h1>
        <p>여기에 내용을 추가하세요.</p>
        <UserInfoBox greenMode={greenMode} show={showUserInfo}>
          <p>이름: {user?.userData?.Users_name}</p>
          <p>이메일: {user?.userData?.Users_email}</p>
          <p>닉네임: {user?.userData?.Users_nickname}</p>
        </UserInfoBox>
      </MainContent>
    </>
  );
};

export default UserDash;
