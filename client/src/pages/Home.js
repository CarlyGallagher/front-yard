import React from "react";
import Card from "../components/card";
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../utils/queries";


const Home = () => {
  const { loading, data } = useQuery(QUERY_LISTINGS);
  const listing = data?.listings || [];
  console.log(listing)

  return <main>This is the home page
    <h2>Listings</h2>

    <Card
      listings={listing}
    />




  </main>;

};

export default Home;
