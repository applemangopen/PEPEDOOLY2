<<<<<<< Updated upstream
import React from "react";
import styled from "styled-components";
=======
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom"; // React Router의 Link 컴포넌트 사용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
>>>>>>> Stashed changes

const HeaderStyle = styled.nav`
  /* position: */
  top: 0;
  font-size: 15px;
  width: 100%;
  height: 100px;
  background-color: #3bdd3b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

<<<<<<< Updated upstream
const Header = () => {
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
      </ul>
    </HeaderStyle>
  );
=======
const RightMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #3bdd3b;
    padding: 20px 0;
    display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  }
`;

const MenuItem = styled.li`
  margin-left: 20px;
  color: #fff;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 20px;
    font-size: 24px;
    color: #fff;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.get("http://localhost:4000/admin/logout");
      navigate("/");
    } catch (error) {
      console.error("로그아웃 요청 실패", error);
    }

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    return (
      <HeaderStyle>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/PepeDooly.svg"}
            alt="PepeDoooly"
          />
          <Link to="/">PepeDooly</Link>
        </div>

        <ul>
          <li onClick={logout}>로그아웃</li>
        </ul>

        {/* <RightMenu> */}
        <MenuIcon onClick={toggleMenu}>
          <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </MenuIcon>
        <RightMenu showMenu={showMenu}>
          <MenuItem>
            <Link to="/board">게시판</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/admin">어드민</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/dashboard">대시보드</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">로그인</Link>
          </MenuItem>
        </RightMenu>
      </HeaderStyle>
    );
  };
>>>>>>> Stashed changes
};

export default Header;
