import React from "react";
import Card from "../components/card";
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../utils/queries";

const Listings = () => {
  const { error, data } = useQuery(QUERY_LISTINGS);
  const listings = JSON.stringify(data?.listings) || [];

  if (error) {
    return `Error! ${error.message}`;
  }
  listings.map((listing) => {
    return (
      <section>
        <h1>Listings</h1>
        <Card listing={listings} />
      </section>
    );
  });
};

export default Listings;
