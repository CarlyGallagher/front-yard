import React from "react";
import { Grid, Divider } from "semantic-ui-react";

import { handleSave, handleClick } from "../utils/listings";

import "../styles/listCard.css";

function Card({ listings }) {
  if (!listings) {
    return <div>No listings</div>;
  }

  console.log(listings);
  return (
    <Grid className="listing-container">
      {listings.map((listing) => (
        <Grid.Column computer={5} mobile={12} className="card-container">
          <div key={listing._id} className="card" id={listing._id}>
            <div className="Title">
              <h1>{listing.title}</h1>
            </div>
            <div className="img-container">
              <img
                alt={listing.title}
                src={listing.image}
                onClick={() => handleClick(listing._id)}
              />
            </div>
            <div className="content">
              <ul className="item-list">
                <li>
                  <strong>Description:</strong> {listing.description}
                </li>
                <li>
                  <strong>Price:</strong> {listing.price}
                </li>
                <li>
                  <strong>Location:</strong> {listing.zip}
                </li>
              </ul>
              <div>
                <p>Post createdAt: {listing.createdAt}</p>
                <p>Post By: {listing.username}</p>
              </div>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleSave(listing._id)}
              >
                Reserve
              </button>
            </div>
            <Divider vertical />
          </div>
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default Card;
