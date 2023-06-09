import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_LISTING } from "../utils/mutations";
import { QUERY_LISTINGS } from "../utils/queries";

export default function AddListing () {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    price: 0.00,
    zip: "",
  });

  const [addListing, error] = useMutation(ADD_LISTING, {
    update(cache, { data: { addListing } }) {
      try {
        const { listings } = cache.readQuery({ query: QUERY_LISTINGS });

        cache.writeQuery({
          query: QUERY_LISTINGS,
          data: { listings: [addListing, ...listings] },
        });
      } catch (error) {
        console.log(error);
      }
    }
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addListing({
        variables: { ...formState },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h2 className="modal-header">Add a Listing</h2>
      <form onSubmit={handleFormSubmit} className="modal-form modal-section">
        <div className="flex-row space-between my-2">
          <label htmlFor="title">Title:</label>
          <input
            placeholder="Title"
            name="title"
            type="title"
            id="title"
            onChange={handleChange}
            className="modal-input"
          />
        </div>
        <div className="flex-row space-between my-2 modal-section">
          <label htmlFor="description">Description:</label>
          <input
            placeholder="Description"
            name="description"
            type="description"
            id="description"
            onChange={handleChange}
            className="modal-input"
          />
        </div>
        <div className="flex-row space-between my-2 modal-section">
          <label htmlFor="zip">Zip:</label>
          <input
            placeholder="Zip"
            name="zip"
            type="zip"
            id="zip"
            onChange={handleChange}
            className="modal-input"
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
};