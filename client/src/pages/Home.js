import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import { loggedIn, logout } from "../utils/auth";



const Home = () => {

  return <main>
    {!loggedIn() ? (
      <>
        <li>
          <Signup />
        </li>
        <li>
          <Login />
        </li>
      </>
    ) : (
      <li>
        <a href="/#" onClick={logout}>
          Log Out
        </a>
      </li>
    )}


  </main>;
};

export default Home;
