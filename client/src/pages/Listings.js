import React from "react";
import Card from "../components/card";
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../utils/queries";

const Listings = () => {
  const { data } = useQuery(QUERY_LISTINGS);
  const listings = data?.listings || [];

    return (
      <section>
        <h1>Listings</h1>
        <Card listing={listings} />
      </section>
    );

};

export default Listings;
