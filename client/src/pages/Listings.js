import React from "react";
import Card from "../components/card";
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../utils/queries";


const Listings = () => {
    const { loading, data } = useQuery(QUERY_LISTINGS);
    const listing = data?.listings || [];
    console.log(listing)

    return <section>
        <h1>Listings</h1>

        <Card
            listings={listing}
        />




    </section>;

};

export default Listings;
