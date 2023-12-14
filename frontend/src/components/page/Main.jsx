import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Admin from "./Admin";
import Comments from "../organisms/comments/Comments";

// import Header from "../Layout/Header";
// import Footer from "../Layout/Footer";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/comments" element={<Comments />} />
      {/* 
      <Header />
      <Footer /> */}
    </Routes>
  );
};

export default Main;
