import React from "react";
// TODO: create handleSave and handleClick functions in utils folder
import { handleSave, handleClick } from "../utils/listings";
function Card({ listings }) {
    if (!listings) {
        return <div>No listings</div>;
    }

    console.log(listings);
    return (

        <section>
            {listings.map(listing => (
                <div key={listing._id} className="card" id={listing._id}>
                    <div className="Title" >
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
                        <ul>
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
                        <div >
                            <p>Post createdAt: {listing.createdAt}</p>
                            <p>Post By: {listing.username}</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-success" onClick={() => handleSave(listing._id)}>Reserve</button>
                    </div>
                </div>
            ))
            }
        </section>
    );
}



export default Card;
