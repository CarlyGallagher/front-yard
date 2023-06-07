import React from "react";
import { loggedIn, logout } from "../utils/auth";
import { useNavigate, Navigate } from "react-router-dom";

const Home = () => {
  console.log(loggedIn());
  if (!loggedIn()) {
    return <Navigate to="/signup" />;
  }
  return (<main>
    <li>
      <a href="/#" onClick={logout}>
        Log Out
      </a>
    </li>
  </main>);
};

export default Home;
