import React from "react";
import { loggedIn, logout } from "../utils/auth";
import { useNavigate, Navigate } from "react-router-dom";



const Home = () => {


  if (!loggedIn()) {
    return <Navigate to="/signup" />;
  }
  return (
    < Navigate to="/listings" />
  );



};

export default Home;
