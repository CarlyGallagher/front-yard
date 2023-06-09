import React from "react";
import { loggedIn, logout } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();

  if (!loggedIn()) {
    navigate("/signup");
  }
  return (<main>
    <li>
      <Link to="/#" onClick={logout}>
        Log Out
      </Link>
    </li>
    <li>
      <Link to="/listings">
        Listings
      </Link>
    </li>


  </main>);



};

export default Home;
