import React from "react";
// TODO: create handleSave and handleClick functions in utils folder
import { handleSave, handleClick } from "../utils/listings";
function Card({ listing }) {
    if (!listing) {
        return <div>No listings</div>;
    }


    return (

        <section>
            {listing.map(listing => (
                <div key={listing.id} className="card " id={listing.id}>
                    <div className="Title" >
                        <h1>{listing.title}</h1>
                    </div>
                    <div className="img-container">
                        <img
                            alt={listing.title}
                            src={listing.image}
                            id={listing.id}
                            onClick={() => handleClick(listing.id)}
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
                        <button type="button" className="btn btn-success" onClick={() => handleSave(listing.id)}>Reserve</button>
                    </div>
                </div>
            ))
            }
        </section>
    );
}



export default Card;
