import React from "react";
import Card from "../components/card";
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../utils/queries";


const Home = () => {
  const { loading, data } = useQuery(QUERY_LISTINGS);
  const listing = data?.listings || [];
  console.log(listing)

  return <main>
    <h1>Home</h1>
  </main>;

};

export default Home;
