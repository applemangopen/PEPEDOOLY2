import React from "react";
import styled from "styled-components";

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
};

export default Header;
