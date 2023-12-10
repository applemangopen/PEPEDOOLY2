import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import styled from "styled-components";

const BodyStlyed = styled.div`
  height: 100vh;
`;

const Login = () => {
  return (
    <>
      <Header></Header>
      <BodyStlyed>
        <div>
          <input type="email" />
          <label htmlFor="form-label">Email address</label>
        </div>
        <div>
          <input type="password" />
          <label htmlFor="form-label">Password</label>
        </div>
        <button type="submit">Sign In</button>
        <div>
          <p>Don't have an account yet?</p>
          <a href="/register">Register</a>
        </div>
      </BodyStlyed>
      <Footer></Footer>
    </>
  );
};

export default Login;
