import React, { useState, useEffect } from "react";
import Card from "../components/card";
import { QUERY_LISTINGS } from "../utils/queries";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/addButton";
import { useLazyQuery } from "@apollo/client";

import { Button } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "../styles/listings.css";

const Listings = () => {
  const [search, setSearch] = useState("");

  const [getListings, { data }] = useLazyQuery(QUERY_LISTINGS);
  const listings = data?.listings || [];

  useEffect(() => {
    getListings({
      variables: { zip: search },
    });
  }, [search]);

  return (
    <div className="container">
      {" "}
      <SearchBar search={search} setSearch={setSearch} />
      <section className="blobs">
        <div className="logo">
          <img src="/SIX_A740A84A-04FC-4CC6-9EA0-FF579F6ACC20.PNG" alt="" />
        </div>
        <svg
          id="corner"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 900 600"
          width="920"
          height="550"
          version="1.1"
        >
          <g transform="translate(-108.4087965705487 -17.32100474273696)">
            <path
              d="M170.1 -237.8C255.8 -245.1 385.1 -271 476.5 -234.5C567.9 -198 621.5 -99 597.1 -14.1C572.7 70.8 470.4 141.7 402.2 218.5C334 295.2 300 378 238.7 393.7C177.3 409.5 88.7 358.2 12.3 337C-64.2 315.8 -128.3 324.6 -173.1 299.3C-217.8 273.9 -243.1 214.5 -282.2 158.9C-321.3 103.3 -374.2 51.7 -384.3 -5.8C-394.4 -63.3 -361.7 -126.7 -332 -198.4C-302.2 -270.1 -275.4 -350.3 -220.5 -360.8C-165.7 -371.3 -82.8 -312.2 -20.3 -277C42.2 -241.8 84.3 -230.4 170.1 -237.8"
              fill="#33ceaa"
            />
          </g>
        </svg>
      </section>
          <Card listings={listings} />
      <AddButton />
      <div id="btm"></div>
    </div>
  );
};

export default Listings;
