import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../utils/queries";
import Signup from "./Signup";
import Login from "./Login";
import { loggedIn, logout } from "../utils/auth";



const Home = () => {
  const { loading, data } = useQuery(QUERY_LISTINGS);
  const listing = data?.listings || [];
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
