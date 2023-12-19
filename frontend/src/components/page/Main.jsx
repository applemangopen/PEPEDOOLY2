import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Admin from "./Admin";
import Register from "./Register";
import Comments from "../organisms/comments/Comments";
import Board from "../board/Board";
import AdminLogin from "./AdminLogin";

// import Header from "../Layout/Header";
// import Footer from "../Layout/Footer";

const Main = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Main />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/board/*" element={<Board />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      {/* 
      <Header />
      <Footer /> */}
    </Routes>
  );
};

export default Main;
