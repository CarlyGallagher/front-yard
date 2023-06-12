import React from "react";
import { useState } from "react";


const SearchBar = ({ search, setSearch }) => {

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setSearch("");

    };


    return (
        <div className="listSearch">
            <form className="search">
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        value={search}
                        onChange={handleInputChange}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search by ZIP"
                        id="search"
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;


