import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const HeaderStyle = styled.nav`
  top: 0;
  font-size: 15px;
  width: 100%;
  height: 100px;
  background-color: #3bdd3b;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.get("http://localhost:4000/admin/logout");
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error("로그아웃 요청 실패", error);
    }
  };

  return (
    <HeaderStyle>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/assets/PepeDooly.svg"}
          alt="PepeDoooly"
        />
        <a href="/">PepeDooly</a>
      </div>
      <ul>
        <li>
          <a href="/MEMES"></a>MEMES
        </li>
        <li>MEMECHAT</li>
        <li>DASHBOARD</li>
        <li onClick={logout}>로그아웃</li>
      </ul>
    </HeaderStyle>
  );
};

export default Header;
