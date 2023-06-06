import React from "react";
import Card from "../components/card";
import { QUERY_LISTINGS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Home = () => {
  const { loading, data } = useQuery(QUERY_LISTINGS);
  const listings = data?.listings || [];
  console.log(listings)

  return <main>This is the home page
    <h2>Listing</h2>

    <Card
      title={listings.title}
      description={listings.description}
      price={listings.price}
      image={listings.image}
      location={listings.location}
      createdAt={listings.createdAt}
      username={listings.username}
    />




  </main>;

};

export default Home;
