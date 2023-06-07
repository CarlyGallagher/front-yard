import React from "react";
// TODO: create handleSave and handleClick functions in utils folder

function Card({ listing, handleSave, handleClick }) {
    if (!listing) {
        return <div>No listings</div>;
    }


    return (

        <section>
            {listing.map(listing => (
                <div className="card ">
                    <div className="Title" key={listing.id}>
                        <h1>{listing.title}</h1>
                    </div>
                    <div className="img-container">
                        <img
                            alt={listing.title}
                            src={listing.image}
                            id={listing.id}
                            onClick={() => listing.handleClick(listing.id)}
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
                                <strong>Location:</strong> {listing.location}
                            </li>
                        </ul>
                        <div >
                            <p>Post createdAt: {listing.createdAt}</p>
                            <p>Post By: {listing.username}</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-success" onClick={() => listing.handleSave(listing.id)}>Reserve</button>
                    </div>
                </div>
            ))
            }
        </section>
    );
}



export default Card;
