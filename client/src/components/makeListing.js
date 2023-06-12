import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_LISTING } from "../utils/mutations";
import { QUERY_LISTINGS } from "../utils/queries";


const MakeListing = () => {
    const [newListing, setNewListing] = useState({
        title: "",
        description: "",
        price: "",
        zip: "",
        image: "",
    });

    const [addListing, { error }] = useMutation(ADD_LISTING);

    const addListingSubmit = async (listing) => {
        try {
            const { data } = await addListing({
                variables: { listing },
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addListing({
                variables: { ...newListing },
                refetchQueries: [{ query: QUERY_LISTINGS }],
            });
            setNewListing({
                title: "",
                description: "",
                price: "",
                zip: "",
                image: "",
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewListing({
            ...newListing,
            [name]: value,
        });
    };








    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    placeholder="Name"
                    name="name"
                    type="name"
                    id="name"
                    onChange={handleChange}
                />
                <label htmlFor="description">Description:</label>
                <input
                    placeholder="Description"
                    name="description"
                    type="description"
                    id="description"
                    onChange={handleChange}
                />
                <label htmlFor="price">Price:</label>
                <input
                    placeholder="Price"
                    name="price"
                    type="price"
                    id="price"
                    onChange={handleChange}
                />
                <label htmlFor="zip">Zip:</label>
                <input
                    placeholder="Zip"
                    name="zip"
                    type="zip"
                    id="zip"
                    onChange={handleChange}
                />
                <label htmlFor="image">Image:</label>
                <input
                    placeholder="Image"
                    name="image"
                    type="image"
                    id="image"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {error && <div>Something went wrong...</div>}
        </div>
    );
}

export default MakeListing;
