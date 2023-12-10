import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  /* position: absolute; */
  font-size: 15px;
  width: 100%;
  height: 350px;
  background-color: #073407;
  color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transform: translateY(-100%);
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <h2>CONTACT</h2>
        <h2>PEPEDOOLY</h2>
        <ul>
          <li>트위터</li>
          <li>텔레그램</li>
          <li>디스코드</li>
          <li>깃허브</li>
        </ul>
      </div>
      <div>
        $$PEPEDOOLY team has created a meme board to operate as a free
        discussion platform for various meme tokens and meme token holders. This
        space aims to foster open discussions about memes, allowing you to
        showcase your memes and explore more meme opportunities!
      </div>
      <div>
        2023 @ PEPEDOOLY Finance, an anon community, brand, and movement
      </div>
    </FooterStyle>
  );
};

export default Footer;
