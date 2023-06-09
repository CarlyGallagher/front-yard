import React from "react";
import Card from "../components/card";
import { QUERY_LISTINGS } from "../utils/queries";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";





const Listings = () => {
  const [search, setSearch] = useState("");

  const [getListings, { data }] = useLazyQuery(QUERY_LISTINGS);
  const listings = data?.listings || [];

  useEffect(() => {
    getListings({
      variables: { zip: search },
    });
  }, [search])

  return (
    <section>
      <h1>Listings</h1>
      <Card listings={listings} />
      <SearchBar search={search} setSearch={setSearch} />
    </section>
  );

};









export default Listings;
